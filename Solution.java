
public class Solution {

    private int maxExpectedPositive;

    public int firstMissingPositive(int[] input) {
        maxExpectedPositive = input.length;
        circleSortPositiveValues(input);
        return selectFirstMissingPositive(input);
    }

    private void circleSortPositiveValues(int[] input) {
        int index = 1;
        while (index < maxExpectedPositive) {
            while (isInExpectedRangeOfPositives(input[index]) && input[input[index] - 1] != input[index]) {
                swap(input[index] - 1, index, input);
            }
            ++index;
        }
    }

    private int selectFirstMissingPositive(int[] input) {
        int firstMissingPositive = maxExpectedPositive + 1;
        for (int value = 1; value <= maxExpectedPositive; ++value) {
            if (input[value - 1] != value) {
                firstMissingPositive = value;
                break;
            }
        }
        return firstMissingPositive;
    }

    private boolean isInExpectedRangeOfPositives(int value) {
        return value >= 1 && value <= maxExpectedPositive;
    }

    private void swap(int firstIndex, int secondIndex, int[] input) {
        int temp = input[firstIndex];
        input[firstIndex] = input[secondIndex];
        input[secondIndex] = temp;
    }
}
