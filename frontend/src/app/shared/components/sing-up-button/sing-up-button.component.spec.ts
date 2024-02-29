import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpButtonComponent } from './sing-up-button.component';

describe('SingUpButtonComponent', () => {
  let component: SingUpButtonComponent;
  let fixture: ComponentFixture<SingUpButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingUpButtonComponent]
    });
    fixture = TestBed.createComponent(SingUpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
