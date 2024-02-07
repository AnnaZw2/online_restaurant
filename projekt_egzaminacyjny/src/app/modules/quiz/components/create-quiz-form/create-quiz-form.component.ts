import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CategoryEnum } from 'src/app/features/dto/category.enum';
import { QuizDto } from 'src/app/features/dto/quiz.dto';

@Component({
  selector: 'app-create-quiz-form',
  templateUrl: './create-quiz-form.component.html',
  styleUrls: ['./create-quiz-form.component.scss']
})
export class CreateQuizFormComponent implements OnInit {
  quizForm!: FormGroup;
  categories = Object.values(CategoryEnum);

  showDropdown = false;
  selectedCategory = '';
  submitted = false; 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.quizForm = this.formBuilder.group({
      title: ['', Validators.required, this.notEmptyStringValidator],
      description: ['', Validators.required, this.notEmptyStringValidator],
      category: ['', Validators.required],
      questions: this.formBuilder.array([
        this.createQuestionFormGroup(),
        this.createQuestionFormGroup(),
        this.createQuestionFormGroup()
      ])
    });
  }
  notEmptyStringValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value as string;
    if (value.trim().length === 0) {
      return { 'notEmptyString': { value: value } };
    }
    return null;
  }

  get questions() {
    return this.quizForm.get('questions') as FormArray;
  }

  createQuestionFormGroup(): FormGroup {
    return this.formBuilder.group({
      question: ['', Validators.required, this.notEmptyStringValidator],
      correctAnswer: ['', Validators.required, this.notEmptyStringValidator],
      option1: ['', Validators.required, this.notEmptyStringValidator],
      option2: ['', Validators.required, this.notEmptyStringValidator],
      option3: ['', Validators.required, this.notEmptyStringValidator]
    });
  }

  addQuestion() {
    this.questions.push(this.createQuestionFormGroup());
  }

  onSubmit() {
    this.submitted = true;
    if (this.quizForm.valid) {
      const quizData: QuizDto = this.quizForm.value;
      console.log(quizData); // Do whatever you want with the form data, like sending it to an API
    } else {
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
