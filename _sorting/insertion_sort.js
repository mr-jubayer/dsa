// Insertion Sort

`
 * How it works:

  -> Take the first value from the unsorted part of the array.
  -> Move the value into the correct place in the sorted part of the array.
  -> Go through the unsorted part of the array again as many times as there are values.
`;

`
 * Breakdown the code:

    > First let's assume the sorted and unsorted part is divided. Ok
    -> The first value is considered initial sorted part array
    -> Every value after the first value must be compared to the values in the sorted part of the algorithm so that it can be inserted into the correct position.
    -> The Insertion Sort Algorithm must run through the array 4 times, to sort the array of 5 values because we do not have to sort the first value.
    -> And each time the algorithm runs through the array, the remaining unsorted part of the array becomes shorter.
`;

`
 * Psoudo Code: 

 -> An array with values to sort.
 -> An outer loop that picks a value to be sorted. For an array with "n" values, this outer loop skips the first value, and must run "n−1" times.
 -> An inner loop that goes through the sorted part of the array, to find where to insert the value. If the value to be sorted is at index i, the sorted part of the array starts at index 0 and ends at index "i−1".
`;

let array = [64, 34, 25, 12, 22, 11, 90, 5];

function insertionSort(arr) {
  for (let x = 1; x < arr.length; x++) {
    let insertIndex = x;
    let currentValue = arr[x];
    let z = x - 1;

    while (z >= 0 && arr[z] > currentValue) {
      arr[z + 1] = arr[z];
      insertIndex = z;
      z--;
    }
    arr[insertIndex] = currentValue;
  }

  return arr;
}

console.log(insertionSort(array));
