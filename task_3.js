function findMostFrequentElement(arr) {
   
    let elementCounts = [];
  
 
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
    //   elementCounts.push=element;
      elementCounts[element] = (elementCounts[element] || 0) + 1;
    }
 
    let mostFrequentElement;
    let maxCount = 0;
  
 
    for (const element in elementCounts) {
      if (elementCounts[element] > maxCount) {
        mostFrequentElement = element;
        maxCount = elementCounts[element];
      }
    }
  
    return mostFrequentElement;
  }
  
   const mostFrequent = findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]);
  console.log( mostFrequent);