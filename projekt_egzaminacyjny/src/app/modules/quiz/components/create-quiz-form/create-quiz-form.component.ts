import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, of, tap } from 'rxjs';
import { CategoryEnum } from 'src/app/features/dto/category.enum';
import { CreateQuizDto } from 'src/app/features/dto/create-quiz.dto';
import { QuizService } from 'src/app/features/services/quiz/quiz.service';
import { UserService } from 'src/app/features/services/user/user.service';
import { notEmptyStringValidator } from 'src/app/shared/validators/not-empty-string-validator';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.scss'],
})
export class CreateQuizFormComponent implements OnInit {
  existingQuiz: CreateQuizDto | null = null;
  quizForm!: FormGroup;
  categories = Object.values(CategoryEnum);
  showDropdown = false;
  selectedCategory = '';
  submitted = false;
  currentUser = this.userService.getCurrentUser();
  quizId = '';
  showModal = false;

  isEdit = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.isEdit = this.activatedRoute.snapshot.queryParams['edit'] === 'true';
      if (this.isEdit) {
        this.quizId = params['quizId'];
        console.log('id', this.quizId);
        // Fetch quiz data by quizId
        this.quizService.getOne(this.quizId).subscribe(
          (data) => {
            this.existingQuiz = data;

            this.initializeForm();
          },
          (error) => {
            console.error('Error fetching quiz:', error);
          }
        );
      } else {
        this.quizService.getOne(this.quizId).subscribe(
          (data) => {
            this.existingQuiz = data;
            console.log(data);

            console.log('qustions', this.questions);
          },
          (error) => {
            console.error('Error fetching quiz:', error);
          }
        );
      }
      this.initializeForm();
    });
  }

  initializeForm() {
    if (this.existingQuiz) {
      this.quizForm = this.formBuilder.group({
        title: [
          this.existingQuiz.title,
          [Validators.required, notEmptyStringValidator],
        ],
        description: [
          this.existingQuiz.description,
          [Validators.required, notEmptyStringValidator],
        ],
        category: [this.existingQuiz.category, Validators.required],
        questions: this.formBuilder.array(
          this.mapQuestions(this.existingQuiz.questions)
        ),
      });
    } else {
      this.quizForm = this.formBuilder.group({
        title: ['', [Validators.required, notEmptyStringValidator]],
        description: ['', [Validators.required, notEmptyStringValidator]],
        category: ['', Validators.required],
        questions: this.formBuilder.array([
          this.createQuestionFormGroup(),
          this.createQuestionFormGroup(),
          this.createQuestionFormGroup(),
        ]),
      });
    }
  }

  mapQuestions(questions: any[]) {
    return questions.map((question) => {
      return this.formBuilder.group({
        question: [
          question.question,
          [Validators.required, notEmptyStringValidator],
        ],
        correctAnswer: [
          question.correctAnswer,
          [Validators.required, notEmptyStringValidator],
        ],
        option1: [
          question.option1,
          [Validators.required, notEmptyStringValidator],
        ],
        option2: [
          question.option2,
          [Validators.required, notEmptyStringValidator],
        ],
        option3: [
          question.option3,
          [Validators.required, notEmptyStringValidator],
        ],
      });
    });
  }

  createQuestionFormGroup(): FormGroup {
    return this.formBuilder.group({
      question: ['', [Validators.required, notEmptyStringValidator]],
      correctAnswer: ['', [Validators.required, notEmptyStringValidator]],
      option1: ['', [Validators.required, notEmptyStringValidator]],
      option2: ['', [Validators.required, notEmptyStringValidator]],
      option3: ['', [Validators.required, notEmptyStringValidator]],
    });
  }

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestion() {
    this.questions.push(this.createQuestionFormGroup());
  }

  onSubmit() {
    this.submitted = true;
    if (this.quizForm.valid && this.currentUser) {
      const quizData: CreateQuizDto = {
        title: this.quizForm.value.title,
        description: this.quizForm.value.description,
        likes: this.existingQuiz ? this.existingQuiz.likes : 0,
        creationDate: new Date(),
        questions: this.quizForm.value.questions,
        authorUsername: this.currentUser.username,
        authorEmail: this.currentUser.email,
        quizCreationDate: new Date(),
        category: this.quizForm.value.category,
      };

      this.quizService
        .create(quizData)
        .pipe(
          tap((createdQuiz) => {
            console.log('Quiz created successfully:', createdQuiz);
          }),
          catchError((error) => {
            console.error('Error creating quiz:', error);
            return of(null);
          }),
          finalize(() => {
            console.log('Quiz creation request completed.');
          })
        )
        .subscribe();

      if (this.existingQuiz) {
        this.quizService.remove(this.quizId).subscribe((error) => {
          console.error('Error occurred while removing quiz:', error);
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  redirectToHome() {
    this.userService.navigateToHome();
  }

  goBackToQuiz() {
    this.router.navigate(['/quiz', this.quizId]);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.quizForm.patchValue({ category });
    this.showDropdown = false;
  }
}
