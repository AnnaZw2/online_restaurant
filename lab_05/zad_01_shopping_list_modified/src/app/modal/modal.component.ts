import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() modalTitle: string = '';
  @Input() modalContent: string = '';
  @Input() isOpen = false;
  @Output() deleteConfirmed = new EventEmitter<boolean>();
  constructor() {}

  closeModal() {
    this.modalTitle = '';
    this.modalContent = '';
    this.isOpen = false;
  }

  confirmDelete() {
    this.deleteConfirmed.emit(true);
    this.closeModal();
  }
}
