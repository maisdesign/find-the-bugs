const numeriVincenti = [7, 13, 21, 42, 89];
const input = document.getElementById('numero-utente');
const bottone = document.getElementById('verifica');
const messaggio = document.getElementById('messaggio');
let indovinato = false;

bottone.addEventListener('click', function () {
    // IMPORTANTE: NON usare metodi come indexOf(), includes() o find()
    indovinato = false;
    numeriVincenti.forEach(
        (numero) => {
            if (Number(input.value) === numero) {
                indovinato = true;
            }
        });
    if (indovinato === true) {
        messaggio.textContent = "Hai indovinato";
    } else {
        messaggio.textContent = "Non hai indovinato";
    }

});