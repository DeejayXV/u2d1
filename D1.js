/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Abbiamo molti tipi di datatype in JavaScript, tra le quali abbiamo i tipi primitivi che sono: stringa, numero o decimali e booleani:
- le stringhe, sono i tipi dove metti dei variabili come per esempio dei nomi e si racchiudono tra due apici
- numeri o decimali, si mettono numeri interi o anche con le virgole e NON vanno messi dentro le apici
- booleani, sono i tipi di dati che restituisce duo valori, vero o falso (true or false

  abbiamo anche altri tipi come undefined e null:
  - undefined, sono dei variabili che non abbiamo definito
  - null invece, sono i variabili dove annulliamo il contenuto volontariamente
) */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "John"
console.log ("il mio nome è" + " " + myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const number1 = 12;
const number2 = 20;
console.log ("la somma tra i due numeri è", number1 + number2) 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// myName = "Guevarra" 
// console.log ("il mio cognome è" + " " + myName) 

// la risposta nell'esercizio 5 è commentato, siccome da errore e non ci permette di proseguire nei prossimi essercizi

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const y = 4;
console.log ("la differenza tra x e y è", x - y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";
console.log ("la variabile name1 e name2 sono uguali?", name1 === name2) ? "vero" : "falso"