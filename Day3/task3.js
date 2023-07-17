function getObject(obj) {
    var uniqueEntries = {};
  
    for (var key in obj) {
      var currentEntry = obj[key];
      var mark = currentEntry.marks;
  
      if (!uniqueEntries.hasOwnProperty(mark) || currentEntry.age < uniqueEntries[mark].age) {
        uniqueEntries[mark] = currentEntry;
      }
    }
  
    return Object.values(uniqueEntries);
  }
  function getObject(obj) {
    const uniqueEntries = {};
    
    for (const key in obj) {
      const entry = obj[key];
      const mark = entry.marks;
      
      if (!uniqueEntries[mark]  || entry.age > uniqueEntries[mark].age) { 
        uniqueEntries[mark] = entry;
      }
    }
    
    return uniqueEntries;
  }
  
  const input = {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  };
  
  const result = getObject(input);
  console.log(result);