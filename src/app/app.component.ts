import { FormAreaComponent } from './components/form-area/form-area.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OutputAreaComponent } from './components/output-area/output-area.component';
import { RequestBody } from './interfaces/requestBody';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormAreaComponent, OutputAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qr-code';
  imgUrl: string = '../assets/image-02-stroke-rounded.svg'

  constructor(private imageService: ImageService){}

  sendRequest(req: RequestBody) {
    this.imageService.getImage(req).subscribe(res => console.log(res));
    // return this.http.post('http://localhost:500/', req)
  }
}