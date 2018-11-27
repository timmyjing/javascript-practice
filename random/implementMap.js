// Implement data structure “Map” storing pairs of integers (key, value) and define following member functions 
// in O(1) runtime: void insert(key, value), void delete(key), int get(key), int getRandomKey().

/*
Thought process

O(1) insert and delete suggests linked list nodes
O(1) get suggests using a hash for fast key lookup
O(1) get random key suggests using a random algorithm to get an integer...how to relate this back to the 
hash of nodes? Need to know the number of nodes in order to use the random algorithm.


Can actually be done with just a HashMap/Array.
Hash Map is used for key value pairs where the value would be an object with the value and also the position of
the key in the array.

it is easy to sample the array of keys based on the length in O(1) time. The problem comes in deleting the keys from
this sample array in O(1) time. When deleting a key, swap it with the last element in the array and then pop it. This swap
and pop only takes O(1) time. The hash map will also need to delete the key and also update the position of the swapped element.

*/

class Map {
  constructor() {
    this.store = [];
    this.map = {};
  }

  insert(key, value) {
    // support for inserting only not updating for ease
    if (this.map[key] === undefined) {
      this.map[key] = {value: value, index: this.store.length};
      this.store.push(key);
    } 
    return;
  }

  delete(key, value) {
    const pair = this.map[key];
    if (pair) {
      const index = pair.index;

      if (this.store[this.store.length - 1] !== key) {
        // swap with last, pop
        const temp = this.store[this.store.length - 1];
        this.store[this.store.length - 1] = this.store[index];
        this.store[index] = temp;
        this.map[temp].index = index;
      }
      this.store.pop();
      delete this.map[key];
    } else {
      return;
    }
  }

  get(key) {
    return this.map[key];
  }

  getRandomKey() {
    const length = this.store.length;

    if (length === 0) return null;

    const randomIndex = Math.floor(Math.random() * length);

    return this.store[randomIndex];
  }

}