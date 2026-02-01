addEventListener("DOMContentLoaded", (event) => {
    const numeriVincenti = [7, 13, 21, 42, 89];
    const input = document.getElementById('numero-utente');
    const bottone = document.getElementById('verifica');
    const messaggio = document.getElementById('messaggio');

    bottone.addEventListener('click', function () {
        // IMPORTANTE: NON usare metodi come indexOf(), includes() o find()
        let indovinato = false;
        messaggio.className = "";
        for (let i = 0; i < numeriVincenti.length; i++) {
            if ((Number(input.value) === numeriVincenti[i])) {
                indovinato = true;
                break;
            }
        }
        if (indovinato === true) {
            messaggio.textContent = "Hai indovinato";
            messaggio.classList.add("btn", "btn-success");
        } else {
            messaggio.textContent = "Non hai indovinato";
            messaggio.classList.add("btn", "btn-danger");
        }
    });
}
);