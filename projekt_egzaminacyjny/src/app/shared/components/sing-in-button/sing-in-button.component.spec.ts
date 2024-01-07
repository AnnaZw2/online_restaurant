import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInButtonComponent } from './sing-in-button.component';

describe('SingInButtonComponent', () => {
  let component: SingInButtonComponent;
  let fixture: ComponentFixture<SingInButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingInButtonComponent]
    });
    fixture = TestBed.createComponent(SingInButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
