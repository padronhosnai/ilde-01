interface Apartment {
  // Alpha is the biggest angle between this apartment and the top of all buildings to the left
  alpha: number;
  // Beta is the biggest angle between this apartment and the top of all buildings to the right
  beta: number;
}

class Building {
  name: string;
  apartmentsCount: number;
  distance: number;
  apartments?: Apartment[];

  static getHeightToDistanceRatio = (currentBuilding: Building, otherBuilding: Building) =>
    (otherBuilding.apartmentsCount - currentBuilding.apartmentsCount) / Math.abs(otherBuilding.distance - currentBuilding.distance);

  static getSunAngleFromBuilding = (apartmentNumber: number, currentBuilding: Building, biggestRatioBuilding: Building) =>
    Math.atan2(biggestRatioBuilding.apartmentsCount - apartmentNumber, Math.abs(biggestRatioBuilding.distance - currentBuilding.distance));
}

export default Building;