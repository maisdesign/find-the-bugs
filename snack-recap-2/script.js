const form = document.getElementById('registrazione');
const messaggio = document.getElementById('messaggio');

form.addEventListener('submit', function (event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    event.preventDefault();
    if ((username.trim() === "") || (email.trim() === "")) {
        messaggio.textContent = "Inserisci username ed email per favore";
    } else {
        messaggio.textContent = `Il tuo username é: ${username} e la tua mail invece è: ${email}`;
    }
});

