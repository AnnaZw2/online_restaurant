import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() alertMessage: string = '';
  @Input() isAlertOpen: boolean = false;

  onClose() {
    this.isAlertOpen = false;
    this.alertMessage = '';
  }
}
