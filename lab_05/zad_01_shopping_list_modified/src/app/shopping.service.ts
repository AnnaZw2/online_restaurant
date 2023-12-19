import { Injectable } from '@angular/core';
import { Item } from 'src/models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  shoppingList: Item[] = []
  constructor() { 

  }


  get ShoppingList(){
    return this.shoppingList
  }

  addItemToList(item: Item){
    if(this.shoppingList.filter(i => i.name === item.name).length > 0){
      return "Item already exists"
    }else if (item.name === ""){
      return "Item name cannot be empty"
    }
    else{
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

  get boughtItems(){
    return this.shoppingList.filter(i => i.bought === true)
  }
  removeBoughtItems(){
    this.shoppingList = this.shoppingList.filter(i => i.bought === false)
    return "Bought items removed successfully"
  }
}
