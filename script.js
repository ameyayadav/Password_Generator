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

// Function to prompt user for password options
function getPasswordOptions() {
  
  let passwordLength;
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumeric = false;
  let hasSpecial = false;
  
  // Prompt the user to enter a password length
  while (true) {
    const input = prompt("Please enter a password length between 10 and 64:");
  
    // Check if input is valid
    if (input === null) {
      // User clicked cancel, exit the loop
      break;
    } else if (input.trim() === "") {
      // User entered an empty string, ask again
      alert("Please enter a non-empty string.");
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
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function getSelectedCharacter() {
  const selectedCharacters = [];

  if (hasLowerCase) {
    selectedCharacters.push(...lowerCasedCharacters);
  }

  if (hasUpperCase) {
    selectedCharacters.push(...upperCasedCharacters);
  }

  if (hasNumeric) {
    selectedCharacters.push(...numericCharacters);
  }

  if (hasSpecial) {
    selectedCharacters.push(...specialCharacters);
  }

  const randomCharacter = getRandomFromArray(selectedCharacters);
  return randomCharacter;
}


// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);