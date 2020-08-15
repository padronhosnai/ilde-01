import Building from './Building';

describe('Building', () => {
  it('getHeightToDistanceRatio', () => {

    const currentBuilding: Building = { apartmentsCount: 1, distance: 1, name: 'currentBuilding' };
    const otherBuilding: Building = { apartmentsCount: 2, distance: 2, name: 'otherBuilding' };
    expect(Building.getHeightToDistanceRatio(currentBuilding, otherBuilding)).toBe(1);
  });
});