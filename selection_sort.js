// Selection Sort: Second method is good
`
   * Selection Sort Implementation
    To implement the Selection Sort algorithm in a programming language, we need:

    1. An array with values to sort.
    2. An inner loop that goes through the array, finds the lowest value, and moves it to the front of the array. This loop must loop through one less value each time it runs.
    3. An outer loop that controls how many times the inner loop must run. For an array with "n" values, this outer loop must run 
    -> n-1 times.
`;
// Way 1:
const array = [64, 34, 25, 5, 5, 22, 11, 90, 98, 333, 666];

function selectionSort(arr) {
  for (let x = 0; x < arr.length - 1; x++) {
    let min_index = x;
    for (let z = x + 1; z < arr.length; z++) {
      if (arr[z] < arr[min_index]) {
        min_index = z;
      }
    }

    let min_value = arr.splice(min_index, 1); // returns arr, for example [34]

    arr.splice(x, 0, ...min_value);
  }

  return arr;
}

`Time complexity: O(n^2)`;

// console.log(selectionSort(array));

`
 * Selection Sort Shifting Problem
   The Selection Sort algorithm can be improved a little bit more.

   In the code above, the lowest value element is removed, and then inserted in front of the array.

   Each time the next lowest value array element is removed, all following elements must be shifted one place down to make up for the removal.
`;

// Way 2: Instead of remove a value from array just swap it.

const array2 = [64, 34, 25, 5, 5, 22, 11, 90, 98, 333, 666];

function selectionSortGoodWay(arr) {
  for (let x = 0; x < arr.length - 1; x++) {
    let min_index = x;
    for (let z = x + 1; z < arr.length; z++) {
      if (arr[z] < arr[min_index]) {
        min_index = z;
      }
    }

    [arr[x], arr[min_index]] = [arr[min_index], arr[x]];
  }

  return arr;
}

console.log(selectionSortGoodWay(array2));
