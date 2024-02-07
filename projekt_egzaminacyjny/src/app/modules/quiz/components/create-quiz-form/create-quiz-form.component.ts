import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryEnum } from 'src/app/features/dto/category.enum';
import { QuizDto } from 'src/app/features/dto/quiz.dto';
import { notEmptyStringValidator } from 'src/app/shared/validators/not-empty-string-validator'
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
