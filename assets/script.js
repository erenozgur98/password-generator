// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLenghtEl = document.querySelector("#character");
var upperEl = document.querySelector("#uppercase");
var lowerEl = document.querySelector("#lowercase");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "0123456789";
var symbols = "!@#$%^&*(){}[]=<>/,.;:'|/?";


function lower() {
  var lower = Math.floor(Math.random() * lowerCase.length);

  return lowerCase[lower];
}

function upper() {
  var upper = Math.floor(Math.random() * upperCase.length);

  return upperCase[upper];
}

function number() {
  var number = Math.floor(Math.random() * numbers.length);

  return numbers[number];
}

function symbol() {
  var symbol = Math.floor(Math.random() * symbols.length);

  return symbols[symbol];
}


function generatePassword() {
  var passLenght = +passLenghtEl.value;
  var includeLower = lowerEl.checked;
  var includeUpper = upperEl.checked;
  var includeNumbers = numbersEl.checked;
  var includeSymbols = symbolsEl.checked;

  console.log(passLenght, includeLower, includeUpper, includeNumbers, includeSymbols);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword( );
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
