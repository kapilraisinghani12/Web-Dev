
const passwordLength = document.getElementById("passwordLength");
const includeLowercase = document.getElementById("includeLowercase");
const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeChars = document.getElementById("includeChars");
const result = document.getElementById("result");


function generatePassword() {
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+=-?\>/<";

let allowedChars = "";
let password = "";
allowedChars += includeLowercase.checked ? lowercaseChars : "";
allowedChars += includeUppercase .checked? uppercaseChars : "";
allowedChars += includeNumbers.checked ? numbers : "";
allowedChars += includeChars.checked ? specialChars : "";

if(passwordLength.value<3){
   console.log(`Atleast 3 characters required`);
}
else if(allowedChars.length===0){
    console.log(`Select atleast one set of characters`);
}
else{
   
        for(let i = 0; i<passwordLength.value; i++){
            const random = Math.floor(Math.random()*allowedChars.length);
            password+=allowedChars[random];
        }

}

result.textContent = `Password is ${password}`;


}



// const passwordsArray = generatePassword(
//   numOfPasswords,
//   passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeChars
// );

// console.log(passwordsArray[0]);