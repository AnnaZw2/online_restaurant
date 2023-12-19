import { ChangeDetectorRef, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSayHi]'
})
export class SayHiDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2, private cdRef: ChangeDetectorRef) {
    this.changeText();
  }

  private changeText() {
    this.renderer.setProperty(this.elem.nativeElement, 'textContent', 'hola!');
    this.cdRef.detectChanges();
  }
}
