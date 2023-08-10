function missingNum(arr) {
    const n = 10; // Range of numbers from 1 to 10
    let totalSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to 10
  
    // Calculate the sum of the numbers in the array
    let arraySum = arr.reduce((sum, num) => sum + num, 0);
  
    // The missing number is the difference between the total sum and the array sum
    return totalSum - arraySum;
  }
  
  // Test cases
  console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); 
  console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); 
  console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));