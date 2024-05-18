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

class ItemStoreImpl implements ItemStore {
    private itemsById: Map<string, Item>;
    private idsByTag: Map<string, Set<string>>;

    constructor() {
        this.itemsById = new Map();
        this.idsByTag = new Map();
    }

    put(item: Item): void {
        const existingItem = this.itemsById.get(item.id);
        if (existingItem) {
            // Remove the old item from the tag map
            const tagSet = this.idsByTag.get(existingItem.tag);
            if (tagSet) {
                tagSet.delete(existingItem.id);
                if (tagSet.size === 0) {
                    this.idsByTag.delete(existingItem.tag);
                }
            }
        }

        // Add or replace the item in the items map
        this.itemsById.set(item.id, item);

        // Add the item to the tag map
        if (!this.idsByTag.has(item.tag)) {
            this.idsByTag.set(item.tag, new Set());
        }
        this.idsByTag.get(item.tag)?.add(item.id);
    }

    get(id: string): Item | null {
        return this.itemsById.get(id) || null;
    }

    dropAllByTag(tag: string): void {
        const tagSet = this.idsByTag.get(tag);
        if (tagSet) {
            for (const id of tagSet) {
                this.itemsById.delete(id);
            }
            this.idsByTag.delete(tag);
        }
    }

    size(): number {
        return this.itemsById.size;
    }
}

// Example usage:
const store = new ItemStoreImpl();

store.put({ id: '1', tag: 'tag1' });
store.put({ id: '2', tag: 'tag1' });
store.put({ id: '3', tag: 'tag2' });

console.log(store.get('1')); // { id: '1', tag: 'tag1' }
console.log(store.size()); // 3

store.dropAllByTag('tag1');

console.log(store.get('1')); // null
console.log(store.size()); // 1

/** Q2 Explanation
 * 1. Map for items by id:
 *      - Put: O(1) - Adding or updating an item in a map
 *      - Get: O(1) - Retrieving an item by its id
 *      - Delete: O(1) - Deleting an item by its id
 *   Maps provide constant time complexity for these operations on average, making them efficient for frequent use.
 * 
 * 2. Map of sets for ids by tag:
 *      - Put: O(1) - Adding an id to the set corresponding to a tag
 *      - Delete all by tag: O(n) - Removing all ids associated with a tag, where n is the number of ids for that tag
 *    Using a map of sets allows us to efficiently manage and query items by their tags, which is crucial for the 'dropAllByTag' operation
 */


/** Question 3. Asynchronous Event Debugging
 * 
 *              - The original code fails in the cases where the script executes before the 'app-container' element is available in the DOM.
 *                The second solution works because the 'load' event on the 'window' object is fired when the entire page has loaded, ensuring the 'app-container' element is available in the DOM.
 */


/** Question 4. Debugging
 * 
 *     - When you call 'bug.rating()', it returns the 'rating' function itself because  'this.rating' is a reference to the 'rating' method, not the '_rating' property
 *     - To fix this, we should return the '_rating' property inside the 'rating' method 
 *  
 *  Corrected code:
 */
class Bug1 {
    _rating: number | null = null;

    rating() {
        return this._rating;
    }
}

export function question4() {
    const bug = new Bug1();
    return `Rating is ${bug.rating()}`;
}