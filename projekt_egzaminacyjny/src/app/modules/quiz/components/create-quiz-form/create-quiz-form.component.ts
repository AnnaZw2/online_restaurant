import { Component, Input, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, of, tap } from 'rxjs';
import { CategoryEnum } from 'src/app/features/dto/category.enum';
import { CreateQuizDto } from 'src/app/features/dto/create-quiz.dto';
import { QuizService } from 'src/app/features/services/quiz/quiz.service';
import { UserService } from 'src/app/features/services/user/user.service';
import { notEmptyStringValidator } from 'src/app/shared/validators/not-empty-string-validator'
import { Quiz } from '../../models/quiz.model';


@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.scss']
})
export class CreateQuizFormComponent implements OnInit {
  @Input() existingQuiz: Quiz | null = null;
  quizForm!: FormGroup;
  categories = Object.values(CategoryEnum);
  showDropdown = false;
  selectedCategory = '';
  submitted = false; 
  currentUser = this.userService.getCurrentUser();

  constructor(private formBuilder: FormBuilder, private userService:UserService,private quizService: QuizService) { }

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      title: ['', [Validators.required, notEmptyStringValidator]],
      description: ['', [Validators.required,notEmptyStringValidator]],
      category: ['', Validators.required],
      questions: this.formBuilder.array([
        this.createQuestionFormGroup(),
        this.createQuestionFormGroup(),
        this.createQuestionFormGroup()
      ])
    });
  }


  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  createQuestionFormGroup(): FormGroup {
    return this.formBuilder.group({
      question: ['',[ Validators.required, notEmptyStringValidator]],
      correctAnswer: ['',[ Validators.required, notEmptyStringValidator]],
      option1: ['',[ Validators.required, notEmptyStringValidator]],
      option2: ['', [ Validators.required, notEmptyStringValidator]],
      option3: ['',[ Validators.required,notEmptyStringValidator]]
    });
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
        likes: 0,
        creationDate: new Date(),
        questions: this.quizForm.value.questions,
        authorUsername: this.currentUser.username,
        authorEmail: this.currentUser.email,
        quizCreationDate: new Date(),
        category: this.quizForm.value.category
      };
      

      this.quizService.create(quizData)
  .pipe(
    tap((createdQuiz) => {
      // Handle success, if needed
      console.log('Quiz created successfully:', createdQuiz);
    }),
    catchError((error) => {
      // Handle error
      console.error('Error creating quiz:', error);
      // Optionally return a default value or throw the error again
      return of(null); // Return a default value
      // return throwError(error); // Throw the error again
    }),
    finalize(() => {
      // This block will always execute, regardless of success or error
      console.log('Quiz creation request completed.');
    })
  )
  .subscribe();
   
      console.log(quizData); // For testing
    } else {
      console.log('Form is invalid');
      // Handle form validation errors
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.quizForm.patchValue({ category }); // Update form control value
    this.showDropdown = false;
  }
}
