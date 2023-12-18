import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Item } from 'src/models/item.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
    //properties related to modal
    isOpen = false;
    modalTitle = 'Delete item';
    modalContent = 'Are you sure you want to delete this item?';
  
    //properties related to alert
    isAlertOpen = false;
    deleteAllBoughtItems = false;
    alertMessage = '';
  
    //properties related to shopping list
    list = this.shoppingService.ShoppingList;
    itemToDelete: Item = { name: '', bought: false, quantity: 0 };
    newItem: Item = {
      name: '',
      bought: false,
      quantity: 0,
    };

  constructor(private shoppingService: ShoppingService) {
    this.initShoppingList();
  }
initShoppingList(){
  this.shoppingService.addItemToList({
    name: 'La leche',
    bought: false,
    quantity: 12,
  });
  this.shoppingService.addItemToList({
    name: 'El pan',
    bought: false,
    quantity: 1,
  });
  this.shoppingService.addItemToList({
    name: 'La mantequilla',
    bought: false,
    quantity: 4,
  });
  this.shoppingService.addItemToList({
    name: 'Los huevos',
    bought: false,
    quantity: 24,
  });
  this.shoppingService.addItemToList({
    name: 'Elqueso',
    bought: true,
    quantity: 1,
  });
  this.shoppingService.addItemToList({
    name: 'El jamon',
    bought: true,
    quantity: 1,
  });
  this.shoppingService.addItemToList({
    name: 'El chorizo',
    bought: true,
    quantity: 1,
  });
  this.shoppingService.addItemToList({
    name: 'El zumo de naranja',
    bought: true,
    quantity: 4,
  });


  this.list = this.shoppingService.ShoppingList;
}

  addItem() {
    const result = this.shoppingService.addItemToList(this.newItem);
    this.newItem = {
      name: '',
      bought: false,
      quantity: 0,
    };
    console.log(result);
    if ('Item already exists' == result) {
      this.isAlertOpen = true;
      this.alertMessage = result;
    } else if ('Item name cannot be empty' == result) {
      this.isAlertOpen = true;
      this.alertMessage = result;
    }
  }

  //handles what happens when the user clicks on the confirm button on modal
  deleteConfirmed(isConfirmed: boolean) {
    if (isConfirmed) {
      this.isOpen = false;
    }
    if (this.deleteAllBoughtItems) {
      this.shoppingService.removeBoughtItems();
      this.deleteAllBoughtItems = false;
    } else {
      console.log(this.itemToDelete);
      this.shoppingService.removeItemFromList(this.itemToDelete);
      this.list = this.shoppingService.ShoppingList;
    }
  }


  deleteItem(item: Item) {
    this.itemToDelete = item;
    this.isOpen = true;
    console.log(item);
    console.log(this.isOpen);

    this.shoppingService.removeItemFromList(item);
  }

  
  removeBoughtItems() {
    this.deleteAllBoughtItems = true;
    this.isOpen = true;
    this.modalTitle = 'Remove bought items';
    this.modalContent = 'Are you sure you want to remove all bought items?';

    this.list = this.shoppingService.ShoppingList;
  }
}
