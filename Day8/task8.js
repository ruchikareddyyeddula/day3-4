function findPath(tickets) {
    const graph = {};
    tickets.forEach(([from, to]) => (graph[from] ? graph[from].push(to) : graph[from] = [to]));
    Object.values(graph).forEach(destinations => destinations.sort());
  
    const itinerary = [];
    const dfs = (current) => {
      while (graph[current] && graph[current].length > 0) {
        const next = graph[current].shift();
        dfs(next);
      }
      itinerary.push(current);
    };
  
    dfs('A');
    return itinerary.reverse();
  }
  
  // Test cases
  console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]])); // Output: ["A", "C", "F", "I", "Z"]
  console.log(findPath([["A","C"],["A","B"],["C","B"],["B","A"],["B","C"]])); // Output: ["A","B","A","C","B","C"]
  console.log(findPath([["Y", "L"], ["D", "A"],["A", "D"], ["R", "Y"], ["A", "R"]])); // Output: ["A", "D", "A", "R", "Y", "L"]
  