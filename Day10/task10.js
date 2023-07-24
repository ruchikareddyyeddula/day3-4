function bandNamesSort(bandNames) {
    const excludedArticles = ["The", "A", "An"];
  
    // Custom sorting function
    const compareBandNames = (a, b) => {
      const getFirstWord = (name) => name.split(" ")[0];
  
      const firstWordA = getFirstWord(a);
      const firstWordB = getFirstWord(b);
  
      if (excludedArticles.includes(firstWordA)) {
        a = a.replace(`${firstWordA} `, '');
      }
      if (excludedArticles.includes(firstWordB)) {
        b = b.replace(`${firstWordB} `, '');
      }
  
      return a.localeCompare(b);
    };
  
    // Sort the band names using the custom sorting function
    return bandNames.sort(compareBandNames);
  }
  
  // Test cases
  console.log(bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"]));
  // Output: ["The Beatles", "An Irony", "The New Yardbirds", "On A Friday", "The Square Roots"]
  
  console.log(bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"]));
  // Output: ["The Everly Brothers", "A Monster Effect", "The Platters", "The Sex Maggots", "A Yard of Yarn"]
  
  console.log(bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"]));
  // Output: ["The Any Glitters", "But Myth", "The Dawn", "Def Leppard", "An Old Dog"]
  