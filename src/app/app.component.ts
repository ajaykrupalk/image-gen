import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SubmitBtnComponent } from './components/submit-btn/submit-btn.component';
import { OutputAreaComponent } from './components/output-area/output-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextareaComponent, SubmitBtnComponent, OutputAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qr-code';
}