import React from 'react';
import { useGenerations } from 'src/hooks';
import { Card } from './components/Card';
import { Loading } from './components/Loading';

const App = () => {
  const { generations, isLoading, isError } = useGenerations();

  return (
    <div className='2xl:container mx-auto px-4 w-full py-4'>
      <h1 className='text-5xl text-center font-500 py-8'>UK Energy Mix</h1>

      {isError && (
        <div className='text-center text-red-500 text-2xl font-500 py-4'>
          Something went wrong. Please try again later.
        </div>
      )}

      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex justify-center gap-4 flex-wrap'>
          {generations.map((generation) => (
            <div
              key={generation.name}
              className='w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6'
            >
              <Card name={generation.name} perc={generation.perc} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { App };
