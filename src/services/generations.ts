import api from 'src/api';
import type { GenerationMixResponse } from 'src/interfaces';

export const getGenerations = async (): Promise<GenerationMixResponse> => {
  return api.get('/generation');
};
