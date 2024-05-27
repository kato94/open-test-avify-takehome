import { useState, useEffect } from 'react';
import type { GenerationMix } from 'src/interfaces';
import { getGenerations } from 'src/services';

export const useGenerations = () => {
  const [generations, setGenerations] = useState<GenerationMix[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchGeneration = async () => {
    setIsLoading(true);

    try {
      const response = await getGenerations();
      const generations: GenerationMix[] = response.data.generationmix.map(
        (generation) => ({
          name: generation.fuel,
          perc: generation.perc,
        })
      );
      setGenerations(generations);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchGeneration();
  }, []);

  return {
    generations,
    isLoading,
    isError,
  };
};
