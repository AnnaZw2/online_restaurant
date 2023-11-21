import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalTitle = 'Modal Title';
  @Input() modalBody = 'Modal body text goes here.';
  @Output() saveChanges = new EventEmitter<void>();


  openModal(): void {
    const modelDiv =document.getElementById('myModal')
    if(modelDiv) modelDiv.style.display = 'block';
  
  }
  
  
  closeModal(): void {
    const modelDiv =document.getElementById('myModal')
    if(modelDiv) modelDiv.style.display = 'none';
  
  }


}
