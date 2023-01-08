

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

var enter; 
var confirmNumericCharacters;
var confirmSpecialCharacters;
var confirmLowerCasedCharacters;
var confirmUpperCasedCharacters;
var choices;

// Function to prompt user for password options
function getPasswordOptions() {

    enter = parseInt(prompt("How many characters do you want your password to have? (choose a number between 10 to 64)"));

    if (!enter ) {
        alert('This needs a value')
    }
    else if ( enter <= 10 || enter >= 64 ) {
        parseInt(prompt("You must choose a number between 10 to 64"))
    }
    else {
        confirmNumericCharacters = confirm("Do you want to numbers?")
        confirmSpecialCharacters = confirm("Do you want special characters?")
        confirmLowerCasedCharacters = confirm ("Do you want lower cases?")
        confirmUpperCasedCharacters = confirm ("Do you want upper cases?")
    }
    // if the user doesn't make any choises an allert promt comes up
    if (!confirmNumericCharacters && !confirmSpecialCharacters && !confirmLowerCasedCharacters && !confirmUpperCasedCharacters) {
        choices = alert("You must choose at least one character type")
    }
    // if all characters are selected an array containing all the characters is created 
    else if ( confirmNumericCharacters && confirmSpecialCharacters && confirmLowerCasedCharacters && confirmUpperCasedCharacters ) {
        choices = numericCharacters.concat(specialCharacters, lowerCasedCharacters, upperCasedCharacters)
    }
    else if ( confirmNumericCharacters && confirmSpecialCharacters && confirmLowerCasedCharacters ) {
        choices = numericCharacters.concat(specialCharacters, lowerCasedCharacters)
    }
    else if ( confirmNumericCharacters && confirmSpecialCharacters ) {
        choices = numericCharacters.concat(specialCharacters)
    }
    else if ( confirmNumericCharacters) {
        choices = numericCharacters
    }
    else if (confirmSpecialCharacters) {
        choices = specialCharacters
    }
    else if (confirmLowerCasedCharacters) {
        choices = lowerCasedCharacters
    }
    else if ( confirmUpperCasedCharacters ) {
        choices = upperCasedCharacters
    }

    

}



// Function for getting a random element from an array
function getRandom(arr) {
}



// Function to generate password with user input
function generatePassword() {
  var passwordChoice = getPasswordOptions()
  console.log(passwordChoice)
  return "I'm generating a password"
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



