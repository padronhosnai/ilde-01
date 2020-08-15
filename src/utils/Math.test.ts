import { radiansToDegrees } from './Math';

describe('Radians to degrees', () => {
  it('correct radians to degrees transformation', () => {
    expect(radiansToDegrees(0)).toBe(0);
    expect(radiansToDegrees(Math.PI/2)).toBe(90);
    expect(radiansToDegrees(Math.PI)).toBe(180);
  });
});