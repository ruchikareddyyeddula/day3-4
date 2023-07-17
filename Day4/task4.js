function isSimilar(obj1, obj2) {
    // Check if the objects are of the same type
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
  
    // Check if the objects are arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      // Check if the arrays have the same length
      if (obj1.length !== obj2.length) {
        return false;
      }
  
      // Recursively compare each element in the arrays
      for (let i = 0; i < obj1.length; i++) {
        if (!isSimilar(obj1[i], obj2[i])) {
          return false;
        }
      }
  
      return true;
    }
  
    // Check if the objects are maps
    if (obj1 instanceof Map && obj2 instanceof Map) {
      // Check if the maps have the same size
      if (obj1.size !== obj2.size) {
        return false;
      }
  
      // Recursively compare each entry in the maps
      for (const [key, value] of obj1) {
        if (!isSimilar(value, obj2.get(key))) {
          return false;
        }
      }
  
      return true;
    }
  
    // Check if the objects are plain objects
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
  
      // Check if the objects have the same number of keys
      if (keys1.length !== keys2.length) {
        return false;
      }
  
      // Recursively compare each property in the objects
      for (const key of keys1) {
        if (!obj2.hasOwnProperty(key) || !isSimilar(obj1[key], obj2[key])) {
          return false;
        }
      }
  
      return true;
    }
  
    // Compare primitive values directly
    return obj1 === obj2;
  }
  
  console.log(isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]])); // true
  
  console.log(isSimilar({"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]})); // false
  
  console.log(isSimilar({"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false})); // false
  
  console.log(isSimilar([{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}])); // true
  