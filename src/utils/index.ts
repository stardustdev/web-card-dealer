import { CARD_VALUES } from './consts';

export const compareCardValues = (first: string, second: string): number => {
  if (CARD_VALUES.indexOf(first) > CARD_VALUES.indexOf(second)) {
    return 1;
  } else if (CARD_VALUES.indexOf(first) < CARD_VALUES.indexOf(second)) {
    return 0;
  }
  return 0;
};
