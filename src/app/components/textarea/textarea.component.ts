import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css'
})
export class TextareaComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() displayText!: string;

  @ViewChild('textareaElement') textareaElement!: ElementRef<HTMLTextAreaElement>;

  adjustHeight(): void {
    const textarea = this.textareaElement.nativeElement;
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  constructor(){
  }

  ngOnInit(): void { 
  }
}
