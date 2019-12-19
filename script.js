const specialChar = "!#$%&'()*+,-./:;<>?@[]^_`{|}~";
const numOption = "0123456789";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generate() {
  let userInput = prompt("Please input a number between 8 - 128 for length of password.");
  let passwordSize = parseInt(userInput);

  //dialogues for characters and options
  let specialOption = confirm("Would you like the password to have SPECIAL CHARACTERS? (!@#$%^&)");
  let numericOption = confirm("Would you like the password to have NUMBERS? (1,2,4,5,6...)");
  let lowerOption = confirm("Would you like the password to have LOWER CASE LETTERS? (a,b,c,d,e...)");
  let upperOption = confirm("Would you like the password to have UPPER CASE LETTERS? (A,B,C,D,E...)");

  let passwordResult = "";
  let charConfirm = "";

  
  if (passwordSize < 8 || passwordSize > 128 || isNaN(passwordSize)) {
    alert("You must enter a number between 8 to 128 characters in order to generate a password.");
    return;

  }
   if (specialOption) {
    charConfirm += specialChar;
  }

  if (numericOption) {
    charConfirm += numOption;
  }
  if (lowerOption) {
    charConfirm += lowerCase;
  }

  if (upperOption) {
    charConfirm += upperCase;
  }



  else {
    if(charConfirm < 1){
     alert("You must choose one of the given character options.");
    }
  }


  passLength = charConfirm.length;





// FUNCTION THAT CREATES THE PASSWORD BASED ON CRITERIA SELECTED ABOVE

function randomize(length) {
    for (let i = 0; i <= length; i++) {
      passwordResult += charConfirm.charAt(
        Math.floor(Math.random() * passLength)
      );
    }
    return passwordResult;
  }
  document.getElementById("password").innerHTML = randomize(passwordSize - 1);
}



//COPY TO CLIPYBOARD BUTTON FUNCTION

function copyButton() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("The following text has been copied as your password: " + copyText.value);
}