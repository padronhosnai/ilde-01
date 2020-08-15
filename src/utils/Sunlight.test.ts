import { getSunLightInterval } from './Sunlight';

describe('getSunlightInterval', () => {
  it('Get right interval', () => {
    expect(getSunLightInterval(0, 0)).toBe('08:14:00 - 17:25:00');
  });
});