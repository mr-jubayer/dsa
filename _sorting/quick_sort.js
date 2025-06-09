// Quick Sort

`As the name suggests, Quicksort is one of the fastest sorting algorithms.`;

`The Quicksort algorithm takes an array of values, chooses one of the values as the 'pivot' element, and moves the other values so that lower values are on the left of the pivot element, and higher values are on the right of it.`;

`
 * Quicksort Implementation:

 1. An array with values to sort.
 2. A quickSort method that calls itself (recursion) if the sub-array has a size larger than 1.
 3. A partition method that receives a sub-array, moves values around, swaps the pivot element into the sub-array and returns the index where the next split in sub-arrays happens.
`;

`
 PSOUDO CODE: 

 1. Take a unsorted array.
 2. Declare a function named quickSort.
 3. As long as the arr length greater that or equal 1 than run the function. Otherwise return arr.
 4. Assign the pivot as arr[0] or arr[middle] or arr[arr.length-1], and left, right empty variable.
 5. If the value is less than the pivot then push into left if greater than store right var.
`;

let array = [9, 7, 5, 12, 4, 8];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; //
  }

  let pivot = arr[arr.length - 1]; // take the last index as PIVOT
  let left = [];
  let right = [];

  for (let x = 0; x < arr.length - 1; x++) {
    if (arr[x] < pivot) {
      left[left.length] = arr[x];
    } else {
      right[right.length] = arr[x];
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

`
    Time Complexity:

    Best Case: O(n logn)
    Worst Case: O(n^2)

    Space Complexity:

    Best Case: O(log n)
    Worst Case: O(n)
`;

console.log(quickSort(array));

// My way:

`
 * How it works:

  [9, 7, 5, 12, 4, 8] 

  pivot = 9;
  left = [7, 5, 4, 8];
  right = [12];
  [7, 5, 4, 8, 9, 12]

  pivot = 7;
  left = [5, 4];
  right = [8, 9, 12];
  [5, 4, 7, 8, 9, 12]

  pivot = 5;
  left = [4];
  right = [7, 8, 9, 12];
  [4, 5, 7, 8, 9, 12]
`;

`
for (let i = 0; i < array.length; i++) {
  let pivot = array[0];
  let left = [];
  let right = [];

  for (let j = 1; j < array.length; j++) {
    if (array[j] < pivot) {
      left[left.length] = array[j];
    } else {
      right[right.length] = array[j];
    }
  }

  array = [...left, pivot, ...right];
}

console.log(array);

// Time Complexity: O(n^2)
`;
