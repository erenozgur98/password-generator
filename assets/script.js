// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLenghtEl = document.querySelector("#character");
var upperEl = document.querySelector("#uppercase");
var lowerEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");

// variables to take to generate random password
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var symbols = "!@#$%^&*(){}[]_=<>/,;:'|/?".split("");


// Write password to the #password input
function generatePassword() {
  
  // the + before passLenghtEl.value is making the value a number, same as parseInt
  var passwordLength = +passLenghtEl.value;
  var selectedCharacters = [];

  // the if statements for checking if the checkboxes are checked or not as well as prompting with the correct rules if has not been chosen
  if (!upperEl.checked && !lowerEl.checked && !numbersEl.checked && !symbolsEl.checked) {
    alert("You need to select at least one of the below");
    return;
  }
  if ((passwordLength < 8) || (passwordLength > 128)) {
    alert("Password must be at least 8 characters or maximum of 128 characters")
  } 
  if (upperEl.checked) selectedCharacters = selectedCharacters.concat(upperCase);
  if (lowerEl.checked) selectedCharacters = selectedCharacters.concat(lowerCase);
  if (numbersEl.checked) selectedCharacters = selectedCharacters.concat(numbers);
  if (symbolsEl.checked) selectedCharacters = selectedCharacters.concat(symbols);

  var newPassword = [];
  for ( var i = 0; i < passwordLength; i++) {
    newPassword = newPassword + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  }

  return newPassword;
}

// generating the password text via collecting all the information through generatePassword() function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






