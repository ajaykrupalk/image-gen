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
  imgUrl: string = 'https://fal-cdn.batuhan-941.workers.dev/files/kangaroo/XpgOwD1hoQKK7uUuavigQ.jpeg';
  promptMsg: string = 'A sky view of colorful lakes and rivers flowing through the desert';

  constructor(private imageService: ImageService){}

  sendRequest(req: RequestBody) {
    this.imageService.getImage(req).subscribe((res:any) => {
      this.imgUrl = res.images[0].url
      this.promptMsg = res.prompt
    });
  }
}