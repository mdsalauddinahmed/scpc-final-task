function revStr(str) {
     let revStr = "";
  
   
    for (let i =  str.length - 1; i >= 0; i--) {
      
        revStr =revStr+str[i];
    }
  
    return revStr;
  }
  
  const result = revStr("hello world");
  console.log(result); 