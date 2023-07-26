function findSecondSmallest(arr) {
    if (arr.length < 2) {
      console.log("atleast two input value in array")
    }
  
    arr.sort((a, b) => a - b);
  
    return arr[1];
  }
   
  const secondSmallestNumber = findSecondSmallest([5, 2, 8, 1, 6, 3]);
  console.log("Second Smallest Number:", secondSmallestNumber);
 