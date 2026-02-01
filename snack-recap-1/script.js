const prodotti = ['Latte', 'Pane', 'Uova'];
const lista = document.getElementById('lista');
const bottone = document.getElementById('aggiungi');
let prodLenght = prodotti.length;

function prodCreator(num) {
    const li = document.createElement('li');
    li.textContent = prodotti[num];
    lista.appendChild(li);
}

for (let i = 0; i < prodotti.length; i++) {
    prodCreator(i);
}

bottone.addEventListener('click', function () {
    const nuoviProdotti = ['Pasta', 'Riso', 'Pomodori'];
    const random = Math.floor(Math.random() * nuoviProdotti.length);
    prodotti.push(nuoviProdotti[random]);
    prodCreator(prodLenght);
    prodLenght = prodLenght + 1;
});