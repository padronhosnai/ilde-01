import * as moment from 'moment';

export const INITIAL_SUN_LIGHT = new Date('1970/01/01 08:14').getTime();
export const FINAL_SUN_LIGHT = new Date('1970/01/01 17:25').getTime();

export const TOTAL_SUN_LIGHT_INTERVAL = FINAL_SUN_LIGHT - INITIAL_SUN_LIGHT;

export const getSunLightInterval = (alpha: number, beta: number) => {
  const initialShadowInterval = (alpha/180) * TOTAL_SUN_LIGHT_INTERVAL;
  const firstSunlightTime = INITIAL_SUN_LIGHT + initialShadowInterval;

  const finalShadowInterval = (beta/180) * TOTAL_SUN_LIGHT_INTERVAL;
  const lastSunlightTime = FINAL_SUN_LIGHT - finalShadowInterval;
  return `${moment(firstSunlightTime).format('HH:mm:ss')} - ${moment(lastSunlightTime).format('HH:mm:ss')}`;
};