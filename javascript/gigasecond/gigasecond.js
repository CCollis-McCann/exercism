//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { get } from "http";

const GIGASECOND = Math.pow(10, 12);

export const gigasecond = (date) => new Date(date.getTime() + GIGASECOND);
