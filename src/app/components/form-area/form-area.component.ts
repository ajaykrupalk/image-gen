import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestBody } from '../../interfaces/requestBody';

@Component({
  selector: 'app-form-area',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-area.component.html',
  styleUrl: './form-area.component.css'
})

export class FormAreaComponent {
  @Output() onSubmitData: EventEmitter<RequestBody> = new EventEmitter();
  content!: string;
  prompt: string = '';
  error: string = '';

  constructor(){
  }

  ngOnInit(): void { 
  }

  adjustHeight(textarea: HTMLTextAreaElement): void {
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  onClick(){
    if(!this.content){
      this.error = 'Please enter content for QR'
      return;
    }

    const req = {
      content: this.content,
      prompt: this.prompt
    }

    this.onSubmitData.emit(req);

    this.content = '';
    this.prompt = '';
  }
}
