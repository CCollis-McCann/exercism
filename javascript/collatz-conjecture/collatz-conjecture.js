//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function colCon(n) {
  let count = 0;

  while (n != 1) {
    if (n % 2 === 0) {
      n /= 2;
      count++;
    } else {
      n = n * 3 + 1;
      count++;
    }
  }
  return count;
}

export const steps = (n) => {
  if (n > 0) {
    return colCon(n);
  }
  throw new Error("Only positive numbers are allowed");
};
