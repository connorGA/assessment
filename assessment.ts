/** Question 1. Why does this code not work? Provide a working version?

    Answer: The provided code doesn't work because of how array mutations within a loop affect the loop's behavior.
            When 'list.splice(i, 1)' is called, it removes an element and shifts all subsequent elements to the left, causing the loop to skip the next element.


    Corrected Code:
 */

export function question1_removeSmallNumbers(list: (number | undefined)[]) {
    for (let i = list.length - 1; i >= 0; i--) {
        const n = list[i];
        if (n !== undefined && n < 10) {
            console.log('removing', n);
            list.splice(i, 1);
        }
    }
}



/** Question 2. Write classes that implements the following interfaces, assuming that all methods are used with approximately the same frequency.
 *              Explain why you chose the data structures you used.
 */
export interface Item {
    id: string
    tag: string
}

export interface ItemStore {
    /**
     * Adds an {@link Item} to the store, replacing any existing item with the
     * same {@link Item#id} value.
     */
    put: (item: Item) => void

    /**
     * Retrieves the {@link Item} with the given {@link Item#id} value, or
     * null if no such {@link Item} exists in the store.
     */
    get: (id: string) => Item | null

    /**
     * Delete all {@link Item}s with the specified tag.
     */
    dropAllByTag: (tag: string) => void

    /**
     * Returns the number of Items in the store
     */
    size: () => number
}
