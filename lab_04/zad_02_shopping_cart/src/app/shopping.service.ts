import { Injectable } from '@angular/core';
import { Item } from './interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
shoppingList: Item[] = []
  constructor() { 

  }

  getShoppingList(){
    return this.shoppingList
  }

  addItemToList(item: Item){
    if(this.shoppingList.filter(i => i.name === item.name).length > 0){
      return "Item already exists"
    }else{
      this.shoppingList.push(item)
      return "Item added successfully"
    }
  }

  removeItemFromList(item:Item){
    this.shoppingList = this.shoppingList.filter(i => i.name !== item.name)
    return "Item removed successfully"
  }

  clearList(){
    this.shoppingList = []
    return "List cleared successfully"
  }

}
