// Caio Henrique Pedroso Pedro

function invertString(str) {
  //inversao manual de string
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(invertString("Caio Henrique"));
console.log(invertString("Target Sistemas"));
console.log(invertString("Javascript é legal!"));
