import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalTitle: string = "";
  @Input() modalContent: string = "";
  @Input() isOpen = false;
      constructor() { }
    
      closeModal(){
        this.modalTitle = "";
        this.modalContent = "";
        this.isOpen = false;
      }
  
}
