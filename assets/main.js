// DICHIARAZIONE VARIABILI
var mailList = ["mario.rossi@gmail.com", "bianchi66mario@outlook.com", "marco_verdi@hotmail.it", "elisaesposito_1991@alice.it"];

var logInMail = prompt("Inserisci la tua mail");

console.log(mailList);
console.log(logInMail);

// VERIFICA PRESENZA NELLA MAIL LIST
// Variabile di controllo: di default 0 --> diventa 1 se la mail è nella lista
var control = 0;

for (var i = 0; i < mailList.length; i++) {
    if (mailList[i] == logInMail) {
        control = control + 1;
    }
}

console.log(control);

if (control != 0) {
    document.getElementById("log-in-message").innerHTML = "Great! You're in!";
} else {
    document.getElementById("log-in-message").innerHTML = "You shall not pass!";
}
