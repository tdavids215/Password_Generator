// Assignment Code
var generateBtn = document.querySelector("#generate");


// password character type requirements / UpperCase isn't listed as that will be used with lowercase.toUpperCase
// randomPassword is the empty string where the values will be added through the window prompt and confirmations
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [...Array(10).keys()];
var specialCharacters = ["!", "#", "$", "%", "&", "*", "?", "@"];
var randomPassword = "";


/* the function that will allow for user selection of variables through a window prompt
this includes password length, upper and lowercase letters, numbers and special characters
*/
function generatePassword() {
  var passwordLength = window.prompt("Choose a number from 8-128 for the length of your password.")
  // confirms that password length is between 8-128 and is not blamk
  if (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
    prompt("Your choice does not meet the requirements. Please type a number between 8-128.")
  }
  // the prompts for letters, numbers and special characters
  var lowercaseChoice = confirm("Do you want to include lowercase letters in your password?");
  var uppercaseChoice = confirm("Do you want to include uppercase letters in your password?");
  var numberChoice = confirm("Do you want to include numbers in your password?");
  var characterChoice = confirm("Do you want to include special characters in your password?");


  if (lowercaseChoice) {
    randomPassword += lowercaseLetters // adds lowercase letters if the user clicks ok on the confirm window
  }
  if (uppercaseChoice) {
    randomPassword += uppercaseLetters // adds uppercase letters if the user clicks ok on the confirm window
  }
  if (numberChoice) {
    randomPassword += numbers  // adds numbers if the user clicks ok on the confirm window
  }
  if (characterChoice) {
    randomPassword += specialCharacters // adds special characters if the user clicks ok on the confirm window
  }
  // puts together and randomizes user choice to return a password
  var result = "";
  for (i = 0; i < passwordLength; i++) {
    result += randomPassword.charAt(Math.floor(Math.random() * randomPassword.length));
  }
  return result

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* 
password generates on button click
promts for password criteria that can be selected
password length 8-128 charachters
character types: lowercase, uppercase, numeric, special characters
password is displayed either in alert or written on page
*/