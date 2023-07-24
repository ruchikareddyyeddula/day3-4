function spotlightMap(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const spotlightGrid = [];
  
    for (let i = 0; i < rows; i++) {
      spotlightGrid.push(new Array(cols).fill(0));
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Calculate the sum of adjacent numbers
        let totalSum = 0;
        for (let x = i - 1; x <= i + 1; x++) {
          for (let y = j - 1; y <= j + 1; y++) {
            if (x >= 0 && x < rows && y >= 0 && y < cols) {
              totalSum += grid[x][y];
            }
          }
        }
  
        // Subtract the current number as it was included in the above sum
        totalSum -= grid[i][j];
  
        // Assign the Spotlight Sum to the current position in the new grid
        spotlightGrid[i][j] = totalSum + grid[i][j];
      }
    }
  
    return spotlightGrid;
  }
  
  // Test case
  const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const result = spotlightMap(grid);
  console.log(result);
  