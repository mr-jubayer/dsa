// Merge Sort:

`
  The Merge Sort algorithm is a divide-and-conquer algorithm that sorts an array by first breaking it down into smaller arrays, and then building the array back together the correct way so that it is sorted.
`;

`

    * Merge Sort Implementation
      To implement the Merge Sort algorithm we need:

    -> An array with values that needs to be sorted.
    -> A function that takes an array, splits it in two, and calls itself with each half of that array so that the arrays are -> split again and again recursively, until a sub-array only consist of one value.
    -> Another function that merges the sub-arrays back together in a sorted way.
`;

let array = [5, 3, 9, 12, 4, 8, 10];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.round(arr.length / 2);

  let leftHalf = arr.slice(0, mid);
  let rightHalf = arr.slice(mid);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];

  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  result.push(...left.slice(i));
  result.push(...right.slice(j));

  return result;
}

`
    Time Complexity: O(n ⋅ log n)
`;

console.log(mergeSort(array));
