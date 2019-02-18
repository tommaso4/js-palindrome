function palindrome(parola) {
  var ris1 = "";
  for (var i = parola.length - 1; i >= 0 ; i--) {
   ris1 += parola[i];
  }

  if (parola==ris1) {
      return true;
    } else {
      return false;
    }
  }

var word = prompt("dimmi una parola")
palindrome(word);

if (palindrome(word)) {
  document.getElementById("log").innerHTML= "la parola è palindrome"
}else {
  document.getElementById("log").innerHTML= "la parola non è palindrome"
}
