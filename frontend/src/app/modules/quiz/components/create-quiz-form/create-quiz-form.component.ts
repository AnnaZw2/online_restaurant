import { CreateQuestionDto } from './../../../../features/dto/create-question.dto';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, of, tap } from 'rxjs';
import { CategoryEnum } from 'src/app/features/dto/category.enum';
import { CreateQuizDto } from 'src/app/features/dto/create-quiz.dto';
import { QuizService } from 'src/app/features/services/quiz/quiz.service';
import { UserService } from 'src/app/features/services/user/user.service';
import { notEmptyStringValidator } from 'src/app/shared/validators/not-empty-string-validator';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.scss'],
})
export class CreateQuizFormComponent implements OnInit {
  public existingQuiz: CreateQuizDto | null = null;
  public quizForm!: FormGroup;
  public categories: string[] = Object.values(CategoryEnum);
  public showDropdown: boolean = false;
  public selectedCategory: string = '';
  public submitted: boolean = false;
  public currentUser: { username: string; email: string } | null =
    this.userService.getCurrentUser();
  public quizId: string = '';
  public showModal: boolean = false;

  isEdit = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  public ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.isEdit = this.activatedRoute.snapshot.queryParams['edit'] === 'true';
      if (this.isEdit) {
        this.quizId = params['quizId'];
        // Fetch quiz data by quizId
        this.quizService.getOne(this.quizId).subscribe(
          (data) => {
            this.existingQuiz = data;

            this.initializeForm();
          },
          (error) => {
            // eslint-disable-next-line no-console
            console.error('Error fetching quiz:', error);
          }
        );
      } else {
        this.quizService.getOne(this.quizId).subscribe(
          (data) => {
            this.existingQuiz = data;
          },
          (error) => {
            // eslint-disable-next-line no-console
            console.error('Error fetching quiz:', error);
          }
        );
      }
      this.initializeForm();
    });
  }

  public initializeForm(): void {
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

  public mapQuestions(questions: CreateQuestionDto[]) {
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
            if (this.existingQuiz !== null) {
              this.router.navigate(['/home']);
            }
          })
        )
        .subscribe();

      if (this.existingQuiz) {
        this.quizService.remove(this.quizId).subscribe();
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
