function frequencySort(s) {
    // Create a frequency map to count character occurrences
    const charMap = new Map();
    for (const char of s) {
      charMap.set(char, (charMap.get(char) || 0) + 1);
    }
  
    // Sort characters based on frequency, case, and alphabetical order
    const sortedChars = [...charMap.keys()].sort((a, b) => {
      if (charMap.get(b) !== charMap.get(a)) {
        return charMap.get(b) - charMap.get(a);
      } else if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    });
  
    // Build the rearranged string
    let rearranged = '';
    for (const char of sortedChars) {
      rearranged += char.repeat(charMap.get(char));
    }
  
    return rearranged;
  }
  
  // Test cases
  console.log(frequencySort("tree"));   // Output: "eert"
  console.log(frequencySort("cccaaa")); // Output: "aaaccc"
  console.log(frequencySort("Aabb"));