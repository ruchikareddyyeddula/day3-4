function allPairs(arr, target) {
    const pairs = [];
  
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        pairs.push([arr[left], arr[right]]);
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return pairs;
  }
  
  // Test cases
  console.log(allPairs([2, 4, 5, 3], 7)); // Output: [[2, 5], [3, 4]]
  console.log(allPairs([5, 3, 9, 2, 1], 3)); // Output: [[1, 2]]
  console.log(allPairs([4, 5, 1, 3, 6, 8], 9));