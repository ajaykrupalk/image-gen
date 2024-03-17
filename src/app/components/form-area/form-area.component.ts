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
  prompt!: string;
  isDisabled: boolean = false;
  negativePrompt: string = 'cartoon, illustration, animation, face, male, female';
  inferenceSteps: number = 25;
  guidanceScale: number = 7.5;
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
    if(!this.prompt){
      this.error = 'Please enter a prompt';
      return;
    }

    if(this.inferenceSteps < 0 && this.inferenceSteps > 100 || this.guidanceScale < 0 && this.guidanceScale > 20){
      return;
    }

    const req = {
      prompt: this.prompt,
      negativePrompt: this.negativePrompt,
      inferenceSteps: this.inferenceSteps,
      guidanceScale: this.guidanceScale
    }

    this.isDisabled = true;

    this.onSubmitData.emit(req);

    const progress = document.getElementById("progress_bar") as HTMLElement;

    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        this.isDisabled = false; // Re-enable button
        progress.style.width = 0 + '%'; // Hide progress bar
      } else {
        width++;
        // Update progress bar width
        progress.style.width = width + '%';
      }
    }, 20);
    
    this.prompt = '';
    this.negativePrompt = 'cartoon, illustration, animation, face, male, female';
    this.inferenceSteps = 25;
    this.guidanceScale = 7.5;
    this.error = '';
    this.isDisabled = false;
  }
}
