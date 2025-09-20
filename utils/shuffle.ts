
import { arrayShuffle } from "array-shuffle";

/** Shuffles an input array and returns shuffled output as a new array (new reference). */
export const shuffleArray = <T>(array: T[]): T[] => {
    return [...arrayShuffle(array)];
  };
  