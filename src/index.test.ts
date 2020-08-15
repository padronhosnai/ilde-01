import { init } from './index';

const neighborhoods = [
  {
    neighborhood: 'something',
    apartmentsHeight: 1,
    buildings: [
      {
        name: 'something',
        apartmentsCount: 1,
        distance: 2
      }
    ]
  }
];

describe('App', () => {
  it('init returns undefined', () => {
    expect(init(neighborhoods)).toBe(undefined);
    expect(init([])).toBe(undefined);
  });
});