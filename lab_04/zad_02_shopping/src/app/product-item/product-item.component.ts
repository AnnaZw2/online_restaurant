import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() item = '';
  @Output() clickRemove = new EventEmitter<void>();
  // @Output() alertInfo = new EventEmitter<void>();
  showAlert = false;
  title = 'Delete item';
  myContent = 'Are you sure you want to delete this item?';
  sendClickEvent() {
    this.clickRemove.emit();
    this.showAlert = true;
  }
  

  onConfirm() {
    console.log("hihihihi");
    
   this.sendClickEvent();
    this.showAlert = false;
  }
}
