/*

trie implementation with insert and find

start off with a root node
*/

class Node {
  constructor(value) {
    this.value = value;
    this.children = {};
    // end word indicator needed?
  }
}


class Trie {
  constructor() {
    this.root = new Node("");
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      if (node.children[letter] === undefined) {
        let newNode = new Node(letter);
        node.children[letter] = newNode;
        node = newNode;
      } else {
        node = node.children[letter];
      }
    }

  }

  find(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];

      if (node.children[letter] === undefined) return null;

      node = node.children[letter];
    }

    return word;
  }
}

let trie = new Trie();

trie.insert('geeks');
trie.insert('for');
trie.insert('quiz');

console.log(trie.find('geeks'));
console.log(trie.find('go'));