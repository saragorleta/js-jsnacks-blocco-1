// Secondo snack
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array (edited)

var vuoto=[];
for(var i=0; i<6; i++){
  var numero:parseInt(prompt('inserisci un numero'));
  //creiamo una variabile resto che avrà lo scopo di essere un numero sempre pari
  var resto=numero%2;

  if(numero!= 0){
    vuoto.push(numero);
  }
}
console.log(vuoto);
