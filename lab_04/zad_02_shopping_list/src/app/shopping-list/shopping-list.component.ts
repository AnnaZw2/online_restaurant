import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
constructor(private shoppingService: ShoppingService){
  shoppingService.addItemToList({name: "La leche", bought: false, quantity: 12})
  shoppingService.addItemToList({name: "El pan", bought: false,quantity: 1})
  shoppingService.addItemToList({name: "La mantequilla", bought: false,quantity: 4})
  shoppingService.addItemToList({name: "Los huevos", bought: false,quantity: 24})
  shoppingService.addItemToList({name: "Elqueso", bought: true,quantity: 1})
  shoppingService.addItemToList({name: "El jamon", bought: true,quantity: 1})
  shoppingService.addItemToList({name: "El chorizo", bought: true,quantity: 1})
  shoppingService.addItemToList({name: "El zumo de naranja", bought: true,quantity: 4})


}

list = this.shoppingService.ShoppingList;


print(){
  console.log(this.list)
}


}
