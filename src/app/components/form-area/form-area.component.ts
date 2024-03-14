import { Component } from '@angular/core';

@Component({
  selector: 'app-form-area',
  standalone: true,
  imports: [],
  templateUrl: './form-area.component.html',
  styleUrl: './form-area.component.css'
})
export class FormAreaComponent {

  adjustHeight(textarea: HTMLTextAreaElement): void {
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  constructor(){
  }

  ngOnInit(): void { 
  }
}
