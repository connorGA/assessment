"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assessment_1 = require("./assessment");
// Define some test cases
var testCases = [
    [15, 3, 25, undefined, 8, 30, 9],
    [12, 7, 5, 3, 20],
    [undefined, 11, 9, undefined, 15],
    [1, 2, 3, 4, 5],
    []
];
var expectedResults = [
    [15, 25, undefined, 30],
    [12, 20],
    [undefined, 11, undefined, 15],
    [],
    []
];
// Run the test cases
testCases.forEach(function (testCase, index) {
    (0, assessment_1.question1_removeSmallNumbers)(testCase);
    console.log("Test Case ".concat(index + 1, ":"), testCase);
    console.log("Expected Result:", expectedResults[index]);
    console.log("Test Passed:", JSON.stringify(testCase) === JSON.stringify(expectedResults[index]));
    console.log('--------------------------');
});
