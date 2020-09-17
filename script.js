// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var specialchar = confirm('special characters?');
  var capital = confirm('capital letters?');
  var lower = confirm('lowercase letters?');
  var number = confirm('number?');
  var passlength = parseInt(prompt("length?"))
  
  if(passlength<8 || passlength > 128){
    return "Error password must be 8 to 128 characters long"
  }
  
  var cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var char = 'abcdefghijklmnopqrstuvwxyz';
  var spec = '!@#$%^&*()-_+=`~';
  var num = '1234567890';
  var secure = '';
  
  if (specialchar){
    secure = secure + spec;
  }
  if (capital){
    secure = secure + cap;
  }
  if (lower){
    secure = secure + char;
  }
  if (number){
    secure = secure + num;
  }
  if(!number && !capital && !lower && !specialchar){
    return 'please select at least one type of character'
  }

  var pass='';
  for (let i=0; i<passlength; i++){
    var rando = Math.floor(Math.random()*(secure.length));
    pass = pass + secure[rando];
  }
  return pass;
}