import { getEnergyImageByName } from 'src/utils';
import biomass from 'src/assets/images/biomass.png';
import coal from 'src/assets/images/coal.png';
import imports from 'src/assets/images/imports.png';
import gas from 'src/assets/images/gas.png';
import nuclear from 'src/assets/images/nuclear.png';
import other from 'src/assets/images/other.png';
import hydro from 'src/assets/images/hydro.png';
import solar from 'src/assets/images/solar.png';
import wind from 'src/assets/images/wind.png';

describe('getEnergyImageByName', () => {
  it('should return the correct image for the energy type', () => {
    expect(getEnergyImageByName('biomass')).toBe(biomass);
    expect(getEnergyImageByName('coal')).toBe(coal);
    expect(getEnergyImageByName('imports')).toBe(imports);
    expect(getEnergyImageByName('gas')).toBe(gas);
    expect(getEnergyImageByName('nuclear')).toBe(nuclear);
    expect(getEnergyImageByName('other')).toBe(other);
    expect(getEnergyImageByName('hydro')).toBe(hydro);
    expect(getEnergyImageByName('solar')).toBe(solar);
    expect(getEnergyImageByName('wind')).toBe(wind);
    expect(getEnergyImageByName('unknown')).toBe(other);
  });
});
