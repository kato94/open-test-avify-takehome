import biomass from 'src/assets/images/biomass.png';
import coal from 'src/assets/images/coal.png';
import imports from 'src/assets/images/imports.png';
import gas from 'src/assets/images/gas.png';
import nuclear from 'src/assets/images/nuclear.png';
import other from 'src/assets/images/other.png';
import hydro from 'src/assets/images/hydro.png';
import solar from 'src/assets/images/solar.png';
import wind from 'src/assets/images/wind.png';

const energyImages: { [key: string]: string } = {
  biomass,
  coal,
  imports,
  gas,
  nuclear,
  other,
  hydro,
  solar,
  wind,
};

export const getEnergyImageByName = (energyType: string) => {
  return energyImages[energyType] || energyImages['other'];
};
