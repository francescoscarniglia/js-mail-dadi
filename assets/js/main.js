// Esercizio 1: 'Cerca in un array':
var userFound = false;
// 1 Chiedi all’utente la sua email,
var mailUtente = prompt('Inserisci la tua email.');
console.log(mailUtente);

//creo il contenitore di 'email'
var indirizziMail = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
console.log(indirizziMail);

// 2 controlla che sia nella lista di chi può accedere,
for(var i = 0; i < indirizziMail.length; i++) {
  var item = indirizziMail[i];
  if(item == mailUtente) {
    userFound = true;
  }
}
// 3 stampa un messaggio appropriato sull’esito dell controllo
if(userFound == true) {
  document.getElementById('reply-text').innerHTML = 'Utente trovato.';
  document.getElementById('search-array').classList.add('bg-success');
  console.log('utente trovato');
} else {
  document.getElementById('reply-text').innerHTML = 'Utente non trovato.';
  document.getElementById('search-array').classList.add('bg-usuccess');
  console.log('utente non trovato');
}


//Esercizio 2 : 'Gioco dei dadi'
//generare un numero random da 1  a 6, sia per il giocatore sia per il computer

var bottoneGioca = document.getElementById('btn-play');
bottoneGioca.addEventListener('click',
  function() {

    var computer = Math.floor(Math.random()*6) +1;
    document.getElementById('computer-score').innerHTML = computer;
    console.log('punteggio pc: ' + computer);
    var player = Math.floor(Math.random()*6) +1;
    document.getElementById('player-score').innerHTML = player;
    console.log('punteggio giocatore: ' + player)

    if( computer > player ) {
      document.getElementById('game-text').innerHTML = 'Computer';
      console.log('Ha vinto il pc!');
    } else if ( computer < player ){
      document.getElementById('game-text').innerHTML = 'Utente';
      console.log('Hai vinto!');
    } else {
      document.getElementById('game-text').innerHTML = 'Pareggio';
      console.log('Avete pareggiato!')
    }
    document.getElementById('dice-img').classList.add('animation-fast');
  }
);


//Stabilire il vincitore, in base a chi fa il punteggio più alto
