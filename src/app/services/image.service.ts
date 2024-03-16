import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestBody } from '../interfaces/requestBody';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl: string = 'https://fal.run/fal-ai/fast-sdxl'

  constructor(private http: HttpClient) { }

  getImage(req: RequestBody) {
    return this.http.post(this.apiUrl, {
      prompt: req.prompt,
      negative_prompt: req.negativePrompt,
      image_size: 'landscape_16_9',
      num_inference_steps: req.inferenceSteps,
      guidance_scale: req.guidanceScale,
      num_images: 1,
      enable_safety_checker: true
    })
  }
}
