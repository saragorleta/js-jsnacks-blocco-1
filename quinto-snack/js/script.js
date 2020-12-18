// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


var parola1=prompt('inserisci una parola');
var parola2=prompt('inserisci un altra parola');

if (parola1.length>parola2.length) {
  console.log('la parola piu lunga è' parola1);
  else if (parola2.leng>parola1) {
    console.log('la parola piu lunga è'parola2);
  }
  else{
    console.log(parola1==parola2);
  }
}
