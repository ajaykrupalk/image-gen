export interface RequestBody {
    prompt: string;
    negativePrompt?: string;
    inferenceSteps?: number;
    guidanceScale?: number
}