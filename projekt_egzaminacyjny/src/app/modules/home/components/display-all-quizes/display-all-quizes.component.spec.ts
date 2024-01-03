import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllQuizesComponent } from './display-all-quizes.component';

describe('DisplayAllQuizesComponent', () => {
  let component: DisplayAllQuizesComponent;
  let fixture: ComponentFixture<DisplayAllQuizesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayAllQuizesComponent]
    });
    fixture = TestBed.createComponent(DisplayAllQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
