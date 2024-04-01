
#include <span>
#include <vector>
using namespace std;

class Solution {

    int maxExpectedPositive = 0;

public:
    int firstMissingPositive(vector<int>& input) {
        maxExpectedPositive = input.size();
        circleSortPositiveValues(input);
        return selectFirstMissingPositive(input);
    }

private:
    void circleSortPositiveValues(span<int> input) const {
        int index = 1;
        while (index < maxExpectedPositive) {
            while (isInExpectedRangeOfPositives(input[index]) && input[input[index] - 1] != input[index]) {
                swap(input[index] - 1, index, input);
            }
            ++index;
        }
    }

    int selectFirstMissingPositive(span<const int> input) const {
        int firstMissingPositive = maxExpectedPositive + 1;
        for (int value = 1; value <= maxExpectedPositive; ++value) {
            if (input[value - 1] != value) {
                firstMissingPositive = value;
                break;
            }
        }
        return firstMissingPositive;
    }

    bool isInExpectedRangeOfPositives(int value) const {
        return value >= 1 && value <= maxExpectedPositive;
    }

    void swap(int firstIndex, int secondIndex, span<int> input) const {
        int temp = input[firstIndex];
        input[firstIndex] = input[secondIndex];
        input[secondIndex] = temp;
    }
};
