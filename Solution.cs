
using System;

public class Solution
{
    private int maxExpectedPositive;

    public int FirstMissingPositive(int[] input)
    {
        maxExpectedPositive = input.Length;
        CircleSortPositiveValues(input);
        return SelectFirstMissingPositive(input);
    }

    private void CircleSortPositiveValues(int[] input)
    {
        int index = 1;
        while (index < maxExpectedPositive)
        {
            while (IsInExpectedRangeOfPositives(input[index]) && input[input[index] - 1] != input[index])
            {
                Swap(input[index] - 1, index, input);
            }
            ++index;
        }
    }

    private int SelectFirstMissingPositive(int[] input)
    {
        int firstMissingPositive = maxExpectedPositive + 1;
        for (int value = 1; value <= maxExpectedPositive; ++value)
        {
            if (input[value - 1] != value)
            {
                firstMissingPositive = value;
                break;
            }
        }
        return firstMissingPositive;
    }

    private bool IsInExpectedRangeOfPositives(int value)
    {
        return value >= 1 && value <= maxExpectedPositive;
    }

    private void Swap(int firstIndex, int secondIndex, int[] input)
    {
        int temp = input[firstIndex];
        input[firstIndex] = input[secondIndex];
        input[secondIndex] = temp;
    }
}
