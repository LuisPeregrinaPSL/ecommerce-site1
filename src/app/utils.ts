export class Utils {
    static randBetween(min: number, max: number) {
        return Math.floor(Math.random() * max) + min;
    }
}
