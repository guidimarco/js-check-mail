// DICHIARAZIONE VARIABILI
var mailList = ["mario.rossi@gmail.com", "bianchi66mario@outlook.com", "marco_verdi@hotmail.it", "elisaesposito_1991@alice.it"];

// PROVA CICLO MAIL LIST
// for (var i = 0; i < mailList.length; i++) {
//     console.log(mailList[i]);
// }

var logInMail = prompt("Inserisci la tua mail")


console.log(mailList);
console.log(logInMail);

// VERIFICA PRESENZA NELLA MAIL LIST
for (var i = 0; i < mailList.length; i++) {
    if (mailList[i] == logInMail) {
        console.log("OK");
    } else {
        console.log("NO");
    }
}
