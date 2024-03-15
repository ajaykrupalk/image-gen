export interface RequestBody {
    content: string;
    prompt?: string;
    negativePrompt?: string;
    inferenceSteps?: number;
    guidanceScale?: number
}