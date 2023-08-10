function longestIncreasingSubsequence(arr) {
    const n = arr.length;
    if (n === 0) {
      return 0;
    }
  
    // Initialize an array to store the lengths of increasing subsequences
    const lengths = new Array(n).fill(1);
  
    // Calculate the longest increasing subsequence length for each element
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && lengths[i] < lengths[j] + 1) {
          lengths[i] = lengths[j] + 1;
        }
      }
    }
  
    // Find the maximum length in the lengths array
    let maxLength = 1;
    for (let i = 0; i < n; i++) {
      if (lengths[i] > maxLength) {
        maxLength = lengths[i];
      }
    }
  
    return maxLength;
  }
  
  // Test case
  console.log(longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])); // Output: 6
  