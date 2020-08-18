//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz'];

export const isPangram = str =>
  !str ? false : ALPHABET.every(el => str.toLowerCase().includes(el));
