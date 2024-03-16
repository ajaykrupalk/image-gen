import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-area',
  standalone: true,
  imports: [],
  templateUrl: './output-area.component.html',
  styleUrl: './output-area.component.css'
})
export class OutputAreaComponent {
  @Input() imgUrl!: string;
}
