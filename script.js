// Snack 1
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma(a, b) {
  return a + b;
}
console.log(somma(3, 5))
const somma = function (a, b) {
  return a + b;
}

const somma = (a, b) => a + b;
console.log(somma(3, 5));




// Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = numero => numero * numero;
console.log(quadrato(5));




// Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b
const eseguiOperazione = (a, b, operatore) => operatore(a, b)
console.log(eseguiOperazione(2, 3, somma));
console.log(eseguiOperazione(2, 3, moltiplica));



// Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".


function creaTimer(tempo, messaggio = "Tempo Scaduto!") {
  return () => {
    setTimeout(() => {
      console.log(messaggio);
    }, tempo);
  }
}

const timer = creaTimer(5000);
timer();




// Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

//   Nota: Questa funzione creerà un loop infinito.Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(messaggio) {
  let counter = 0
  const id = setInterval(() => {
    console.log(messaggio);
    counter++
    if (counter === 5) {
      clearInterval(id);
      console.log('Intervallo interrotto!');
    }
  }, 2000);
}

stampaOgniSecondo('Messaggio stampato ogni 2 secondi');




// Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(intervallo, limite) {
  let count = 0
  return () => {
    const intervalId = setInterval(() => {
      count++;
      console.log(`Contatore arrivato a ${count}`)
      // Se il contatore raggiunge il limite, interrompiamo il setInterval
      if (count >= limite) {
        clearInterval(intervalId);
        console.log('Contatore interrotto!');
      }
    }, intervallo);
  };

  const contatore = creaContatoreAutomatico(2000, 5);
  contatore();





  // Snack 7
  // Crea una funzione che ferma un timer dopo un certo tempo
  // Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

  function eseguiEferma(messaggio, intervallo, durata)
  const intervalId = setInterval(() => {
    console.log(messaggio);
  }, intervallo)
  setTimeout(() => {
    clearInterval(intervalId)
  }, durata);

  eseguiEferma('Sto eseguendo un timer', 1000, 5000);




  // Snack 8 (Bonus)
  // Crea una funzione che simula un conto alla rovescia
  // Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

  function contoAllaRovescia(n) {
    let counter = n
    const intervalId = setInterval(() => {
      if (counter > 0) {
        console.log(counter);
        counter--;
      } else {
        console.log('Tempo Scaduto!');
        clearInterval(intervalId);
      }
    }, 1000);

    contoAllaRovescia(5);




    // Snack 9 (Bonus)
    // Creare una funzione che esegue una sequenza di operazioni con ritardi
    // Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

    // Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

    function sequenzaOperazioni(operazioni, intervallo)
    operazioni.forEach((operazione, index) => {
      setTimeout(() => {
        operazione();
      }, intervallo * index);
    });

    sequenzaOperazioni([
      () => console.log("Operazione 1"),
      () => console.log("Operazione 2"),
      () => console.log("Operazione 3")
    ], 2000);




    // Snack 10 (Bonus) NON COMPLETATO
    // Creare un throttler per limitare l’esecuzione di una funzione
    // Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

    // Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

    function creaThrottler(callback, limite) {
      let counter = 0
      return function (argomento) {
        const ora
      }

      const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000)
      throttledLog(); // ✅ "Eseguito!"
      throttledLog(); // ❌ Ignorato (chiamato troppo presto)
      setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)