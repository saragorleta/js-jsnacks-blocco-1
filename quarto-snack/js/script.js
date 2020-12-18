//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore

//#1 inseriamo due prompt
var primoNumero=prompt('inserisci un numero');
var secondoNumero=prompt('inserisci un altro numero');
var maggiore;
console.log(primoNumero, secondoNumero);
// #stabiliamo le condizioni
if(primoNumero>secondoNumero){
  console.log(primoNumero);
}

else if (secondoNumero>primoNumero){
  console.log(secondoNumero);
else{
  console.log(primoNumero==secondoNumero);
}
}
