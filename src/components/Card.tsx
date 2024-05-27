import React from 'react';
import type { GenerationMix } from 'src/interfaces';
import { capitalize, getEnergyImageByName } from 'src/utils';

export const Card = ({ name, perc }: GenerationMix) => {
  const capitalizedName = capitalize(name);
  const image = getEnergyImageByName(name);

  return (
    <div className='rd-4 bg-gradient-to-t from-white to-violet-200 pa-4 aspect-ratio-1 flex flex-col transition-transform hover:scale-105'>
      <p className='text-center c-violet-6 font-700 text-2xl'>
        {capitalizedName}
      </p>

      <div className='grow-1'></div>

      <img
        src={image}
        alt={capitalizedName}
        className='pa-1 w-full m-auto aspect-ratio-1'
      />

      <p className='text-center c-violet-6 font-700 text-5xl'>{perc} %</p>
    </div>
  );
};
