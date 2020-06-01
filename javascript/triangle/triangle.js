//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...args) {
    this.sideA = args[0];
    this.sideB = args[1];
    this.sideC = args[2];
  }

  triangleEquality() {
    return (
      this.sideA + this.sideB < this.sideC ||
      this.sideA + this.sideC < this.sideB ||
      this.sideB + this.sideC < this.sideA
    );
  }

  triangleTruth() {
    return this.sideA && this.sideB && this.sideC;
  }

  isEquilateral() {
    return this.triangleTruth()
      ? this.sideA === this.sideB && this.sideA === this.sideC
      : false;
  }

  isIsosceles() {
    return this.triangleEquality()
      ? false
      : (this.sideA === this.sideB && this.sideA !== this.sideC) ||
          (this.sideB === this.sideA && this.sideB !== this.sideC) ||
          (this.sideC === this.sideA && this.sideC !== this.sideB) ||
          (this.sideB === this.sideC && this.sideB !== this.sideA) ||
          this.isEquilateral();
  }

  isScalene() {
    return this.isEquilateral() || this.isIsosceles() || this.triangleEquality()
      ? false
      : this.sideA !== this.sideB &&
          this.sideA !== this.sideC &&
          this.sideB !== this.sideC;
  }
}
