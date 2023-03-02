

// display

class SLL {
  constructor() {
    this.head = null;
  }

  display() {
    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }
}


const myArray = [2, 3, 4];
const newValue = 1;

myArray.unshift(newValue);
console.log(myArray); // Output: [1, 2, 3, 4]


const myArray = [1, 2, 3];

const firstValue = myArray.shift();
console.log(firstValue); // Output: 1
console.log(myArray); // Output: [2, 3]


const myArray = [1, 2, 3];
const index = 1;
const newValue = 4;

myArray.splice(index, 0, newValue);
console.log(myArray); // Output: [1, 4, 2, 3]


const myArray = [1, 2, 3, 4];
const index = 1;

const removedValue = myArray.splice(index, 1)[0];
console.log(removedValue); // Output: 2
console.log(myArray); // Output: [1, 3, 4]
