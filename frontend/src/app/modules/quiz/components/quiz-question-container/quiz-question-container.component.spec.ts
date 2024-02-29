import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionContainerComponent } from './quiz-question-container.component';

describe('QuizQuestionContainerComponent', () => {
  let component: QuizQuestionContainerComponent;
  let fixture: ComponentFixture<QuizQuestionContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizQuestionContainerComponent]
    });
    fixture = TestBed.createComponent(QuizQuestionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
