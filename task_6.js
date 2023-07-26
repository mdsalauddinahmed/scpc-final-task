function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    
    let pass = "";
  
    for (let i = 0; i < length; i++) {
      const ran= Math.floor(Math.random() * allChars.length);
      pass += allChars[ran];
    }
  
    return pass;
  }
 
  const passwordLength = 8;
  const generatedPassword = generateRandomPassword(passwordLength);
  console.log(generatedPassword);