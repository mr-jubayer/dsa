// Bubble sort

/*
    Time Complexity: 
    -> The Bubble Sort algorithm loops through every value in the array, comparing it to the value next to it. So for an array of "n" values, there must be 

    And after one loop, the array is looped through again and again "n" times.
    This means there are n ⋅ n comparisons done in total, 
    so the time complexity for Bubble Sort is:

                      O(n^2)
                    –––––––
                    –––––––
*/

/**
 Bubble Sort Implementation
 -> To implement the Bubble Sort algorithm in a programming language, we need:

 -> An array with values to sort.
 -> An inner loop that goes through the array and swaps values if the first value is higher than the next value. This loop  must loop through one less value each time it runs.
 -> An outer loop that controls how many times the inner loop must run. For an array with n values, this outer loop must run n-1 times.

 The resulting code looks like this:
 * **/

// Way 1:
const array = [7, 12, 9, 11, 3];

function bubbleSort(unsortedArray) {
  if (!Array.isArray(unsortedArray)) return "Input should be an Array!";

  let n = unsortedArray.length;
  for (let w = 0; w < n; w++) {
    for (let x = 0; x < n - w - 1; x++) {
      let a = unsortedArray[x];
      let b = unsortedArray[x + 1];

      if (a > b) {
        unsortedArray[x] = b;
        unsortedArray[x + 1] = a;
      }
    }
  }

  return unsortedArray;
}

// console.log(bubbleSort(array));

/**
Bubble Sort Improvement
The Bubble Sort algorithm can be improved a little bit more.

Imagine that the array is almost sorted already, with the lowest numbers at the start, like this for
 example:

 > my_array = [7, 3, 9, 12, 11]

 In this case, the array will be sorted after the first run, but the Bubble Sort algorithm will continue to run, without swapping elements, and that is not necessary.
* **/

// Way 2:
const array2 = [2, 15, 9, 12, 11];

function bubbleSort2(unsortedArray) {
  if (!Array.isArray(unsortedArray)) return "Input should be an Array!";

  let n = unsortedArray.length;
  for (let w = 0; w < n; w++) {
    let swapped = false;
    for (let x = 0; x < n - w - 1; x++) {
      let a = unsortedArray[x];
      let b = unsortedArray[x + 1];

      if (a > b) {
        [unsortedArray[x + 1], unsortedArray[x]] = [a, b];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return unsortedArray;
}

console.log(bubbleSort2(array2));

// note: If the array already sorted so why we need to sort it, for that reason if nothing to swapped or swapped = false then break the loop
