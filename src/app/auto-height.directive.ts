import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoHeight]'
})
export class AutoHeightDirective {

  constructor(private elementRef: ElementRef) {}

  @HostListener('input', ['$event.target'])
  onInput(textArea: HTMLTextAreaElement): void {
    this.adjustHeight(textArea);
  }

  adjustHeight(textArea: HTMLTextAreaElement): void {
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }
}
