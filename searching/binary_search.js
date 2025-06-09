// Binary Search

`
    The Binary Search algorithm searches through an array and returns the index of the value it searches for.
`;

`
    * PSOUDE:

    -> An array with values to search through.
    -> A target value to search for.
    -> A loop that runs as long as left index is less than, or equal to, the right index.
    -> An if-statement that compares the middle value with the target value, and returns the index if the target value is found.
    -> An if-statement that checks if the target value is less than, or larger than, the middle value, and updates the "left" or "right" variables to narrow down the search area.
    -> After the loop, return -1, because at this point we know the target value has not been found.
`;

function binarySearch(arr, targetVal) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let center = left + right;

    // console.log(center);

    if (arr[center] === targetVal) {
      return arr[center];
    } else if (arr[center] < targetVal) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return -1;
}

let array = [2, 3, 7, 7, 11, 15, 25]; // must be a sorted array
let target = 3;

console.log(binarySearch(array, target));

`
    * Time Complexity:
    
    ----------
    O(log^2 n)
    ----------
`;
