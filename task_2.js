function positiveSum(arr){
    let sum=0;
    for(let i =0;i<arr.length;i++){
        const char = arr[i]
        if(char>0){
           sum=sum+char;
            
        }
        
    }
    return sum;
}
console.log(positiveSum([2, -5, 10, -3, 7]))