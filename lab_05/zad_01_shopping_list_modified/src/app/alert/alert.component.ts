import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() alertMessage: string = '';
  @Input() isAlertOpen: boolean = false;
  @Output() closeAlert = new EventEmitter<boolean>();

  onClose() {
    this.closeAlert.emit(true);
    this.isAlertOpen = false;
  }
}
