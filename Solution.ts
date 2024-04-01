
function firstMissingPositive(input: number[]): number {
    this.maxExpectedPositive = input.length;
    circleSortPositiveValues(input);
    return selectFirstMissingPositive(input);
};

function circleSortPositiveValues(input: number[]): void {
    let index = 1;
    while (index < this.maxExpectedPositive) {
        while (isInExpectedRangeOfPositives(input[index]) && input[input[index] - 1] !== input[index]) {
            swap(input[index] - 1, index, input);
        }
        ++index;
    }
}

function selectFirstMissingPositive(input: number[]): number {
    let firstMissingPositive = this.maxExpectedPositive + 1;
    for (let value = 1; value <= this.maxExpectedPositive; ++value) {
        if (input[value - 1] !== value) {
            firstMissingPositive = value;
            break;
        }
    }
    return firstMissingPositive;
}

function isInExpectedRangeOfPositives(value: number): boolean {
    return value >= 1 && value <= this.maxExpectedPositive;
}

function swap(firstIndex: number, secondIndex: number, input: number[]): void {
    let temp = input[firstIndex];
    input[firstIndex] = input[secondIndex];
    input[secondIndex] = temp;
}
