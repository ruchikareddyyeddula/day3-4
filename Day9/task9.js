function zeroesToEnd(arr) {
    let lastNonZeroIndex = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        // Swap the non-zero element with the lastNonZeroIndex element
        const temp = arr[lastNonZeroIndex];
        arr[lastNonZeroIndex] = arr[i];
        arr[i] = temp;
  
        lastNonZeroIndex++;
      }
    }
  }
  
  // Test cases
  const arr1 = [1, 2, 0, 0, 4, 0, 5];
  zeroesToEnd(arr1);
  console.log(arr1); // Output: [1, 2, 4, 5, 0, 0, 0]
  
  const arr2 = [0, 0, 2, 0, 5];
  zeroesToEnd(arr2);
  console.log(arr2); // Output: [2, 5, 0, 0, 0]
  
  const arr3 = [4, 4, 5];
  zeroesToEnd(arr3);
  console.log(arr3); // Output: [4, 4, 5]
  
  const arr4 = [0, 0];
  zeroesToEnd(arr4);
  console.log(arr4); // Output: [0, 0]
  