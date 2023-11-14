import { Component } from '@angular/core';
import { ShoppingItem } from '../interfaces/Shoppinng.interface';
import { ShoppingListService } from '../services/ShoppingList.services';
@Component({
  selector: 'app-shopping-list-componnent',
  templateUrl: './shopping-list-componnent.html',
  styleUrls: ['./shopping-list-componnent.scss']
})
export class ShoppingListComponnent {
  newItem = '';
  constructor(public shoppingListService: ShoppingListService) {}
  addItem(): void {
    this.shoppingListService.addItem({ name: this.newItem, bought: false });
    this.newItem = '';
  }


  removeItem(item: ShoppingItem): void {
    //modal!!!!!!
    this.shoppingListService.removeItem(item);
  }

  toggleBoughtStatus(item: ShoppingItem): void {
    this.shoppingListService.toggleBoughtStatus(item);
  }
}
