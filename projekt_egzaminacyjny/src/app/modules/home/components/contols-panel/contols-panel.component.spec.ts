import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContolsPanelComponent } from './contols-panel.component';

describe('ContolsPanelComponent', () => {
  let component: ContolsPanelComponent;
  let fixture: ComponentFixture<ContolsPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContolsPanelComponent]
    });
    fixture = TestBed.createComponent(ContolsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
