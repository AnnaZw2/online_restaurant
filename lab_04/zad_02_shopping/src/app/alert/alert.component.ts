import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() title = '';
  @Input() content = '';
  @Output() confirm = new EventEmitter<void>();
  confirmAction() {
    this.confirm.emit();
    console.log("confirmAction");
    
  }

}
