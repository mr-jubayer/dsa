// Linear Search:

`
    * PSOUDO:
     
    -> Go through the array value by value from the start.
    -> Compare each value to check if it is equal to the value we are looking for.
    -> If the value is found, return the index of that value.
    -> If the end of the array is reached and the value is not found, return -1 to indicate that the value was not found.
`;

function linearSearch(arr, targetValue) {
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === targetValue) {
      return x;
    }
  }

  return -1;
}

let array = [12, 8, 9, 11, 5, 11];
let target = 2;
let linear = linearSearch(array, target);

if (linear > 0) {
  console.log(`Value ${target} fount index at ${linear}`);
} else {
  console.log(`Value ${target} not found`);
}

`
  * Time Complexity: 

    -> If Linear Search runs and finds the target value as the first array value in an array with "n" values, only one compare is needed.
    -> But if Linear Search runs through the whole array of "n" values, without finding the target value, "n" compares ar needed

    This means that time complexity for Linear Search is
                       ------
                        O(n)
                       ------
`;
