import { FormAreaComponent } from './components/form-area/form-area.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutputAreaComponent } from './components/output-area/output-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormAreaComponent, OutputAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qr-code';
}