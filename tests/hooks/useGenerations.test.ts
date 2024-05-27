import { renderHook, waitFor } from '@testing-library/react';
import { useGenerations } from 'src/hooks/useGenerations';
import { getGenerations } from 'src/services';
import type { GenerationMix, GenerationMixResponse } from 'src/interfaces';

jest.mock('src/services');

describe('useGenerations', () => {
  it('should fetch generations and set loading state', async () => {
    const generationMixResponse: GenerationMixResponse[] = [
      { fuel: 'biomass', perc: 10 } as GenerationMixResponse,
      { fuel: 'coal', perc: 20 } as GenerationMixResponse,
    ];
    const generation: GenerationMix[] = [
      { name: 'biomass', perc: 10 },
      { name: 'coal', perc: 20 },
    ];

    const response = { data: { generationmix: generationMixResponse } };
    (getGenerations as jest.Mock).mockResolvedValue(response);

    const { result } = await waitFor(() => {
      return renderHook(() => useGenerations());
    });

    expect(result.current.generations).toEqual(generation);
    expect(result.current.isLoading).toBe(false);
  });
});
