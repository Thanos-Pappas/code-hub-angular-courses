export class ArrayService {
    array: string[] = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

    constructor() {
    }

    getArray() {
        return this.array.slice();
    }
}