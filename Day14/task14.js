function lookAndSay(start, n) {
    const sequence = [start.toString()];
  
    for (let i = 1; i < n; i++) {
      const currentTerm = sequence[i - 1];
      let nextTerm = '';
      let count = 1;
  
      for (let j = 1; j < currentTerm.length; j++) {
        if (currentTerm[j] === currentTerm[j - 1]) {
          count++;
        } else {
          nextTerm += count + currentTerm[j - 1];
          count = 1;
        }
      }
  
      nextTerm += count + currentTerm[currentTerm.length - 1];
      sequence.push(nextTerm);
    }
  
    return sequence.map(Number);
  }
  
  // Test cases
  console.log(lookAndSay(1, 7));   
  console.log(lookAndSay(123, 4)); 
  console.log(lookAndSay(70, 5));  
  