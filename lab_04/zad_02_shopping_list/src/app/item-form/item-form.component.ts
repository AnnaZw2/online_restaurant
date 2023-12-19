import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/models/item.interface';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  @Output() itemAdded = new EventEmitter<Item>();
newItem = {
  name: '',
  quantity: 0,
  bought: false
};

addItem(){
  this.itemAdded.emit(this.newItem)
  this.newItem = {
    name: '',
    quantity: 0,
    bought: false
  }
}

}

