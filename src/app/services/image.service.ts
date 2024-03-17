import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestBody } from '../interfaces/requestBody';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl: string = 'https://image-gen-koq0.onrender.com/fal-ai'

  constructor(private http: HttpClient) { }

  getImage(req: RequestBody): any {
    return this.http.post(this.apiUrl, {
      prompt: req.prompt,
      negative_prompt: req.negativePrompt,
      num_inference_steps: req.inferenceSteps,
      guidance_scale: req.guidanceScale
    })
  }
}
