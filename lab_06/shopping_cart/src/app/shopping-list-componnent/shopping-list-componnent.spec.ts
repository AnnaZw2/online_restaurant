import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponnent} from './shopping-list-componnent';

describe('ShoppingListComponnent', () => {
  let component: ShoppingListComponnent;
  let fixture: ComponentFixture<ShoppingListComponnent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListComponnent],
    });
    fixture = TestBed.createComponent(ShoppingListComponnent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
