function findTwoNumbersWithSum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];
  
      if (sum === target) {
         console.log(sum)
         return [left,right]
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    
    return [];
  }
  
  // Test the function
  const inputArray = [1, 3, 5, 7, 9, 11];
  const targetValue = 12;
  const result = findTwoNumbersWithSum(inputArray, targetValue);
  console.log(result);  