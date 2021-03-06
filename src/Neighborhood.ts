import Building from './Building';

class Neighborhood {
  public neighborhood: string;
  public apartmentsHeight: number;
  public buildings: Building[];

  constructor(neighborhood: string, apartmentsHeight: number, buildings: Building[]) {
    this.neighborhood = neighborhood;
    this.apartmentsHeight = apartmentsHeight;
    this.buildings = buildings;
  }
}

export default Neighborhood;