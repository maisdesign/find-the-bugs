/*
* Data una galleria di immagini con relativo link, quando clicchiamo su un link, dovrebbe mostrare un alert con il nome dell'immagine invece di navigare. 
* Però alcuni link ancora ti portano via dalla pagina! Completa il codice risolvendo eventuali bug!
*/
addEventListener("DOMContentLoaded", (event) => {

    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    const link3 = document.getElementById('link3');

    link1.addEventListener('click', function (evento) {
        alert('Hai cliccato: Monkey Island');
        evento.preventDefault();
    });

    link2.addEventListener('click', function (evento) {
        alert('Hai cliccato: Forrest Gump');
        evento.preventDefault();
    });

    link3.addEventListener('click', function (evento) {
        alert('Hai cliccato: Mostra di Picasso');
        evento.preventDefault();
    });
});