export interface GenerationMixResponse {
  data: Data;
}

interface Data {
  from: string;
  to: string;
  generationmix: GenerationMixResponse[];
}

export interface GenerationMixResponse {
  fuel: string;
  perc: number;
}
