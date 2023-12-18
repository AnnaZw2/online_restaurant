import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Item } from 'src/models/item.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  constructor(private shoppingService: ShoppingService) {
    shoppingService.addItemToList({
      name: 'La leche',
      bought: false,
      quantity: 12,
    });
    shoppingService.addItemToList({
      name: 'El pan',
      bought: false,
      quantity: 1,
    });
    shoppingService.addItemToList({
      name: 'La mantequilla',
      bought: false,
      quantity: 4,
    });
    shoppingService.addItemToList({
      name: 'Los huevos',
      bought: false,
      quantity: 24,
    });
    shoppingService.addItemToList({
      name: 'Elqueso',
      bought: true,
      quantity: 1,
    });
    shoppingService.addItemToList({
      name: 'El jamon',
      bought: true,
      quantity: 1,
    });
    shoppingService.addItemToList({
      name: 'El chorizo',
      bought: true,
      quantity: 1,
    });
    shoppingService.addItemToList({
      name: 'El zumo de naranja',
      bought: true,
      quantity: 4,
    });
  }
  isOpen = false;
  list = this.shoppingService.ShoppingList;
  modalTitle = 'Delete item';
  modalContent = 'Are you sure you want to delete this item?';
  itemToDelete: Item = { name: '', bought: false, quantity: 0 };


  deleteConfirmed(isConfirmed: boolean) {
    console.log(isConfirmed);
    if (isConfirmed) {
      this.isOpen = false;
    }
    console.log(this.itemToDelete);
    this.shoppingService.removeItemFromList(this.itemToDelete);
    this.list = this.shoppingService.ShoppingList;
  }
  deleteItem(item: Item) {
    this.itemToDelete = item;
    this.isOpen = true;
    console.log(item);
    console.log(this.isOpen);

    // this.shoppingService.removeItemFromList(item)
  }
}
