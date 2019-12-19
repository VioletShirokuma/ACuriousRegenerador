const specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const numericSet = "0123456789";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generate() {
  let userInput = prompt("Please input a number between 8 - 128 for length of password.");
  let userSize = parseInt(userInput);
  let specialOption = confirm("Would you like your password to contain SPECIAL CHARACTERS? (!@#$%^&)");
  let numericOption = confirm("Would you like your password to contain NUMBERS? (1,2,4,5,6...)");
  let lowerOption = confirm("would you like your password to contain LOWER CASE LETTERS? (a,b,c,d,e...)");
  let upperOption = confirm("would you like your password to contain UPPER CASE LETTERS? (A,B,C,D,E...)");

  let passwordResult = "";
  let charsConfirmed = "";

  if (userSize < 8 || userSize > 128 || isNaN(userSize)) {
    alert("You must enter a number between 8 to 128 characters.");
    return;

  }
   if (specialOption) {
    charsConfirmed += specialChar;
  }

  if (numericOption) {
    charsConfirmed += numericSet;
  }
  if (lowerOption) {
    charsConfirmed += lowerSet;
  }

  if (upperOption) {
    charsConfirmed += upperSet;
  }
  else {
    if(charsConfirmed < 1){
     alert("You must choose one of the given character options.");
    }
  }


  passLength = charsConfirmed.length;

function randomize(length) {
    for (let i = 0; i <= length; i++) {
      passwordResult += charsConfirmed.charAt(
        Math.floor(Math.random() * passLength)
      );
    }
    return passwordResult;
  }
  document.getElementById("password").innerHTML = randomize(userSize - 1);
}


function copyButton() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}