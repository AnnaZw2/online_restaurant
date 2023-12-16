import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  newItem = ""
  items: string[] = []
  addItem(){
    if(this.newItem.length > 0){
      this.items.push(this.newItem)
      this.newItem = ""
    }
  }

  removeItem(item: string){
    
   this.items = this.items.filter((el)=>el!=item)
    console.log(this.items)
  }
}
