import { question1_removeSmallNumbers } from "./assessment";

// Test cases
const testCases: (number | undefined)[][] = [
    [15, 3, 25, undefined, 8, 30, 9],
    [12, 7, 5, 3, 20],
    [undefined, 11, 9, undefined, 15],
    [1, 2, 3, 4, 5],
    []
];

const expectedResults: (number | undefined)[][] = [
    [15, 25, undefined, 30],
    [12, 20],
    [undefined, 11, undefined, 15],
    [],
    []
];

// Run tests
testCases.forEach((testCase, index) => {
    question1_removeSmallNumbers(testCase);
    console.log(`Test Case ${index + 1}:`, testCase);
    console.log(`Expected Result:`, expectedResults[index]);
    console.log(`Test Passed:`, JSON.stringify(testCase) === JSON.stringify(expectedResults[index]));
    console.log('--------------------------');
});
