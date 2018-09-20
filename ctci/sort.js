// Sorting Algorithms



// Quick Sort


// Merge Sort


// Bubble Sort

const bubble = array => {

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return array;
}


const arr = [5,4,3,2,1]

// console.log(bubble(arr))