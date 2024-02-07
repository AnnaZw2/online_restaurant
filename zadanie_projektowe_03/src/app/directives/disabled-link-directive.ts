import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabledLink]'
})
export class DisabledLinkDirective {
  @Input() set appDisabledLink(value: boolean) {
    this.isDisabled = value;
  }

  @HostBinding('style.pointer-events') get pointerEvents() {
    return this.isDisabled ? 'none' : 'auto';
  }

  @HostBinding('style.text-decoration') get textDecoration() {
    return this.isDisabled ? 'none' : 'underline';
  }

  @HostBinding('style.color') get color() {
    return this.isDisabled ? '#6c757d' : '#007bff'; 
  }

  @HostBinding('style.cursor') get cursor() {
    return this.isDisabled ? 'not-allowed' : 'pointer';
  }

  private isDisabled = false;
}
