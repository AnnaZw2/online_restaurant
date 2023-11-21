import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


@Input() title ="";
@Input() body = "";
@Input() showModal = false;
@Output() confirm: EventEmitter<boolean> = new EventEmitter();
@Output() closeM: EventEmitter<boolean> = new EventEmitter();
closeModal() {
  this.closeM.emit();
  this.showModal = false;
}

confirmAction() {
  this.confirm.emit(true);
  this.showModal = false;

}
}
