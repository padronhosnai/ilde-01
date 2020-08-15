import Neighborhood from './Neighborhood';

let _neighborhoods: Neighborhood[] = [];

const init = (neighborhoods: Neighborhood[]) => {
  _neighborhoods = neighborhoods;
};

init([{neighborhood: 'something', apartmentsHeight: 1, buildings: [{ name: 'something', apartmentsCount: 1, distance: 2 }]}]);

export { init };