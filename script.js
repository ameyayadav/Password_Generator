// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength = 0;
let hasLowerCase = false;
let hasUpperCase = false;
let hasNumeric = false;
let hasSpecial = false;
let promptInput = "";
let passwordCharacterStr = "";

let passwordStr = "";
// defined a function to check whether the string has space or not 
function hasSpace(str){
  return str.indexOf(" ") >= 0;
}
// Function to prompt user for password options
function getPasswordOptions() {
  
  // let passwordLength;
  // let hasLowerCase = false;
  // let hasUpperCase = false;
  // let hasNumeric = false;
  // let hasSpecial = false;
  
  // Prompt the user to enter a password length
  while (true) {
    const input = prompt("Please enter a password length between 10 and 64:");
  
    // Check if input is valid
    if (input === null) {
      // User clicked cancel, exit the loop
      break;
    } else if (input.trim() === "") {
      // User entered an empty string, ask again
      alert("Please enter a password.");
      continue;
    } else if (isNaN(input)) {
      // User entered a non-numeric string, ask again
      alert("Please enter a number.");
      continue;
    }
  
    passwordLength = parseInt(input);
  
    // Check if password length is valid
    if (passwordLength < 10 || passwordLength > 64) {
      alert("Please enter a number between 10 and 64.");
      continue;
    }
  
    // Password length is valid, exit the loop
    break;
  }
  
  // Prompt the user to select character types
  if (passwordLength !== undefined) {
    while (true) {
      hasLowerCase = confirm("Do you want to include lowercase characters?");
      hasUpperCase = confirm("Do you want to include uppercase characters?");
      hasNumeric = confirm("Do you want to include numeric characters?");
      hasSpecial = confirm("Do you want to include special characters?");
  
      if (hasLowerCase || hasUpperCase || hasNumeric || hasSpecial) {
        break;
      }
  
      alert("Please select at least one character type.");
    }
  }
  
  // Display the password settings to the user
  if (passwordLength !== undefined) {
    const characterTypes = [];
    if (hasLowerCase) characterTypes.push("lowercase");
    if (hasUpperCase) characterTypes.push("uppercase");
    if (hasNumeric) characterTypes.push("numeric");
    if (hasSpecial) characterTypes.push("special");
  
    alert(`Password settings: Length: ${passwordLength}, Character types: ${characterTypes.join(", ")}.`);
  }
  const characterTypes = [];

  if (hasLowerCase) {
    characterTypes.push("lowercase");
    console.log("The password has lowercase characters.");
  }
  
  if (hasUpperCase) {
    characterTypes.push("uppercase");
    console.log("The password has uppercase characters.");
  }
  
  if (hasNumeric) {
    characterTypes.push("numeric");
    console.log("The password has numeric characters.");
  }
  
  if (hasSpecial) {
    characterTypes.push("special");
    console.log("The password has special characters.");
  }
  
  const characterTypeNum = characterTypes.length;
  return characterTypeNum
}

// Function for getting a random element from an array
function randomNo(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// function getSelectedCharacter() {
//   const selectedCharacters = [];

//   if (hasLowerCase) {
//     selectedCharacters.push(...lowerCasedCharacters);
//   }

//   if (hasUpperCase) {
//     selectedCharacters.push(...upperCasedCharacters);
//   }

//   if (hasNumeric) {
//     selectedCharacters.push(...numericCharacters);
//   }

//   if (hasSpecial) {
//     selectedCharacters.push(...specialCharacters);
//   }

//   const randomCharacter = getRandomFromArray(selectedCharacters);
//   return randomCharacter;
// }

function getSelectedCharacter(){
  if(hasLowerCase)
  {
    passwordCharacterStr =passwordCharacterStr.concat(lowerCasedCharacters);
  }
  if(hasUpperCase)
  {
    passwordCharacterStr = passwordCharacterStr.concat(upperCasedCharacters);
  }
  if(hasNumeric)
  {
    passwordCharacterStr = passwordCharacterStr.concat(numericCharacters);
  }
  if(hasSpecial)
  {
    passwordCharacterStr = passwordCharacterStr.concat(specialCharacters);
  }
  
}

function shuffleStr(str){
  let strArr = str.split("");
  console.log("The orginal password string is "+ strArr);
  for(let i=strArr.length-1; i>0; i--){
    let j = Math.floor(Math.random()*(i+1));
    let k = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = k;
  }
  console.log("The shuffled password string is " + strArr);
  return strArr.join("");
}

function resetValues() {

    passwordLength = 0,
    hasLowerCase= false,
    hasUpperCase = false,
    hasNumeric = false,
    hasSpecial = false,
    characterTypeNum = 0,
    passwordCharacterStr = [],
    passwordStr = ""
  };

 

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getSelectedCharacter();
  
  if(hasLowerCase){
    passwordStr += randomNo(lowerCasedCharacters);
  }
  if(hasUpperCase){
    passwordStr += randomNo(upperCasedCharacters);
  }
  if(hasNumeric){
    passwordStr += randomNo(numericCharacters);
  }
  if(hasSpecial){
    passwordStr += randomNo(specialCharacters);
  }
  
  for(let i=0; i<passwordLength-characterTypeNum; i++){
    passwordStr += randomNo(passwordCharacterStr);
  }
  
  passwordStr = shuffleStr(passwordStr);
  
  return passwordStr;
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  resetValues ();
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);