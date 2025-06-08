// Counting Sort:

`
    * How it works:

    1. Create a new array for counting how many there are of the different values.
    2. Go through the array that needs to be sorted.
    3. For each value, count it by increasing the counting array at the corresponding index.
    4. After counting the values, go through the counting array to create the sorted array.
    5. For each count in the counting array, create the correct number of elements, with values that correspond to the counting array index.
`;

`
  ~ Counting Sort Implementation
  -> To implement the Counting Sort algorithm in a programming language, we need:
  -> 
  -> An array with values to sort.
  -> A 'countingSort' method that receives an array of integers.
  -> An array inside the method to keep count of the values.
  -> A loop inside the method that counts and removes values, by incrementing elements in the counting array.
  -> A loop inside the method that recreates the array by using the counting array, so that the elements appear in the right order.
`;

function countingSort(arr) {
  let maxVal = Math.max(...arr);
  let count = new Array(maxVal + 1).fill(0);

  // Count occurrences
  while (arr.length > 0) {
    let num = arr.shift(); // Equivalent to Python's pop(0)
    count[num]++;
  }

  // Rebuild sorted array
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr.push(i);
      count[i]--;
    }
  }

  return arr;
}

let unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];
let sortedArr = countingSort(unsortedArr);
console.log("Sorted array:", sortedArr);
