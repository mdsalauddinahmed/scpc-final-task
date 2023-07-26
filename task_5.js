function calculator(num1, operator, num2) {
    let result;
    let a=num1;
    let b=num2;
  
     if(operator == "+"){
        result=a+b
     }else if(operator == "-"){
        result=a-b
     }else if(operator == "*"){
        result=a*b;
     }else if(operator == "/"){
        result=a/b;
     }else  {
        console.log('input operator')
     }
  
    return result;
  }
  const result = calculator(1000,"/",10);
  console.log("Result:", result);  