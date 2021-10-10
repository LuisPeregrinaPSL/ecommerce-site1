export class Utils {
  static randBetween(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }

  static randPrice(): number {
    return Utils.randBetween(5, 100000) / 100;
  }
}
