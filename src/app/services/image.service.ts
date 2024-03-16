import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestBody } from '../interfaces/requestBody';
import * as fal from "@fal-ai/serverless-client";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl: string = 'https://api.sampleapis.com/coffee/hot'

  constructor(private http: HttpClient) {}

  async getImage(req: RequestBody){

    const result = await fal.subscribe("fal-ai/fast-sdxl", {
      input: {
        prompt: "photo of a rhino dressed suit and tie sitting at a table in a bar with a bar stools, award winning photography, Elke vogelsang"
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          update.logs.map((log) => log.message).forEach(console.log);
        }
      },
    });
    return this.http.get(this.apiUrl)
  }
}
