import Neighborhood from './Neighborhood';
import Building from './Building';
import { radiansToDegrees } from './utils/Math';

import { getSunLightInterval } from './utils/Sunlight';

let _neighborhoods: Neighborhood[] = [];

const init = (neighborhoods: Neighborhood[]) => {
  // sort buildings
  neighborhoods = neighborhoods.map(neighborhood => (
    {
      ...neighborhood,
      buildings: neighborhood.buildings.sort((buildingA, buildingB) => buildingA.distance - buildingB.distance),
    }
  ));

  neighborhoods.forEach(neighborhood => {
    const buildings = neighborhood.buildings;
    buildings.forEach((currentBuilding, currentIndex) => {
      let biggestLeftRatio = Number.NEGATIVE_INFINITY;
      let biggestLeftRatioBuilding = null;
      for(const leftBuilding of buildings.slice(0, currentIndex)) {
        const leftRatio = Building.getHeightToDistanceRatio(currentBuilding, leftBuilding);
        if (leftRatio >= biggestLeftRatio) {
          biggestLeftRatio = leftRatio;
          biggestLeftRatioBuilding = leftBuilding;
        }
      }

      let biggestRightRatio = Number.NEGATIVE_INFINITY;
      let biggestRightRatioBuilding = null;
      for(const rightBuilding of buildings.slice(currentIndex + 1, buildings.length)) {
        const rightRatio = Building.getHeightToDistanceRatio(currentBuilding, rightBuilding);
        if (rightRatio > biggestRightRatio) {
          biggestRightRatio = rightRatio;
          biggestRightRatioBuilding = rightBuilding;
        }
      }

      currentBuilding.apartments = [];
      for (let apartmentNumber = 0; apartmentNumber < currentBuilding.apartmentsCount; apartmentNumber++) {
        const alpha = biggestLeftRatioBuilding ?  Building.getSunAngleFromBuilding(apartmentNumber, currentBuilding, biggestLeftRatioBuilding) : 0;
        const beta = biggestRightRatioBuilding ? Building.getSunAngleFromBuilding(apartmentNumber, currentBuilding, biggestRightRatioBuilding) : 0;
        currentBuilding.apartments.push({
          alpha: radiansToDegrees(alpha),
          beta: radiansToDegrees(beta),
        });
      }
    });
  });
  _neighborhoods = neighborhoods;
};

const getSunlightHours = (neighborhoodName: string, buildingName: string, apartmentNumber: number) => {
  const neighborhood = _neighborhoods.find(n => n.neighborhood === neighborhoodName);
  if (neighborhood) {
    const building = neighborhood.buildings.find(b => b.name === buildingName);
    if (building) {
      const apartment = building.apartments[apartmentNumber];
      if (apartment) {
        return getSunLightInterval(apartment.alpha, apartment.beta);
      } else {
        return 'Apartment not found';
      }
    } else {
      return 'Building not found';
    }
  } else {
    return 'Neighborhood not found';
  }
}

// TODO - move this to tests
init([
  {
    neighborhood: 'something',
    apartmentsHeight: 1,
    buildings: [
      {
        name: 'second',
        apartmentsCount: 2,
        distance: 2,
      },
      {
        name: 'first',
        apartmentsCount: 1,
        distance: 1,
      },
      {
        name: 'third',
        apartmentsCount: 3,
        distance: 3,
      },
    ]
  }
]);


// TODO - move this to tests
console.log(getSunlightHours('something', 'first', 0));
console.log(getSunlightHours('something', 'second', 0));
console.log(getSunlightHours('something', 'second', 1));
console.log(getSunlightHours('something', 'third', 0));
console.log(getSunlightHours('something', 'third', 1));
console.log(getSunlightHours('something', 'third', 2));

export { init, getSunlightHours };