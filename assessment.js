"use strict";
/** Question 1. Why does this code not work? Provide a working version?

    Answer: The provided code doesn't work because of how array mutations within a loop affect the loop's behavior.
            When 'list.splice(i, 1)' is called, it removes an element and shifts all subsequent elements to the left, causing the loop to skip the next element.


    Corrected Code:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.question1_removeSmallNumbers = void 0;
function question1_removeSmallNumbers(list) {
    for (var i = list.length - 1; i >= 0; i--) {
        var n = list[i];
        if (n !== undefined && n < 10) {
            console.log('removing', n);
            list.splice(i, 1);
        }
    }
}
exports.question1_removeSmallNumbers = question1_removeSmallNumbers;
