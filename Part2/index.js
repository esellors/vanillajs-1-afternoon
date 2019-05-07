let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

console.dir(document)
console.log(document)

function reset() {
    location.reload();
}

function setCard() {
    let card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}
