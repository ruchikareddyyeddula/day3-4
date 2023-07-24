function groupSeats(seatingArrangement, n) {
    const rows = seatingArrangement.length;
    const cols = seatingArrangement[0].length;
    let count = 0;
  
    for (let i = 0; i < rows; i++) {
      let consecutiveVacantSeats = 0;
  
      for (let j = 0; j < cols; j++) {
        if (seatingArrangement[i][j] === 0) {
          consecutiveVacantSeats++;
  
          if (consecutiveVacantSeats === n) {
            count++;
            consecutiveVacantSeats--; // Move the window to the right by reducing one seat
          }
        } else {
          consecutiveVacantSeats = 0; // Reset the window as soon as we find an occupied seat
        }
      }
    }
  
    return count;
  }
  
  // Test cases
  const seatingArrangement1 = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
  ];
  const n1 = 2;
  console.log(groupSeats(seatingArrangement1, n1));