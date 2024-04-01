
/**
 * @param {number[]} input
 * @return {number}
 */
var firstMissingPositive = function (input) {
    this.maxExpectedPositive = input.length;
    circleSortPositiveValues(input);
    return selectFirstMissingPositive(input);
};

/**
 * @param {number[]} input
 * @return {void}
 */
function circleSortPositiveValues(input) {
    let index = 1;
    while (index < this.maxExpectedPositive) {
        while (isInExpectedRangeOfPositives(input[index]) && input[input[index] - 1] !== input[index]) {
            swap(input[index] - 1, index, input);
        }
        ++index;
    }
}

/**
 * @param {number[]} input
 * @return {number}
 */
function selectFirstMissingPositive(input) {
    let firstMissingPositive = this.maxExpectedPositive + 1;
    for (let value = 1; value <= this.maxExpectedPositive; ++value) {
        if (input[value - 1] !== value) {
            firstMissingPositive = value;
            break;
        }
    }
    return firstMissingPositive;
}

/**
 * @param {number} value
 * @return {boolean}
 */
function isInExpectedRangeOfPositives(value) {
    return value >= 1 && value <= this.maxExpectedPositive;
}

/**
 * @param {number} firstIndex
 * @param {number} secondIndex
 * @param {number[]} input
 * @return {void}
 */
function swap(firstIndex, secondIndex, input) {
    let temp = input[firstIndex];
    input[firstIndex] = input[secondIndex];
    input[secondIndex] = temp;
}
