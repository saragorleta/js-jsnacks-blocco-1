//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome
//comunicagli se può partecipare o no alla festa.

var invitati=['pippo','pluto','topolino','paperino'];
var nome=prompt('inserisci il tuo nome');
var messaggio=vero;

for(var i=0; i<invitati.length;i++){
  //puoi partecipare alla festa
  if (nome==invitati[i]){
    messaggio=vero;
  }
}
if(messaggio) {
  console.log('puoi partecipare alla festa');
} else{
  console.log('non puoi partecipare alla festa');
}




// non puoi partecipare alla festa
