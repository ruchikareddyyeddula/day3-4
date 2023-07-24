function findCommonLetters(str1, str2) {
    // Find the common letters that link str1 and str2
    let overlap = 0;
    let minOverlap = Math.min(str1.length, str2.length);
  
    for (let i = 1; i <= minOverlap; i++) {
      if (str1.slice(-i) === str2.slice(0, i)) {
        overlap = i;
      }
    }
  
    return overlap;
  }
  
  function join(words) {
    let result = words[0];
    let minOverlap = Infinity;
  
    for (let i = 1; i < words.length; i++) {
      const overlap = findCommonLetters(words[i - 1], words[i]);
      minOverlap = Math.min(minOverlap, overlap);
      result += words[i].slice(overlap);
    }
  
    return [result, minOverlap];
  }
  
  // Test cases
  console.log(join(["oven", "envier", "erase", "serious"])); // Output: ["ovenvieraserious", 2]
  console.log(join(["move", "over", "very"])); // Output: ["movery", 3]
  console.log(join(["to", "ops", "psy", "syllable"])); // Output: ["topsyllable", 1]
  console.log(join(["aaa", "bbb", "ccc", "ddd"])); // Output: ["aaabbbcccddd", 0]
  