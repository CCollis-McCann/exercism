//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const TRANSCRIPTION = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = (nucleotides) => {
  if (!nucleotides) return nucleotides;

  return [...nucleotides].map((curr) => TRANSCRIPTION[curr]).join('');
};
