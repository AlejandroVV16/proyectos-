const titulo = document.getElementById('titulo');
const gif = document.getElementById('gif');
const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');

botonNo.addEventListener('click', () => {
    // Aumenta el tamaño del botón "Sí"
    const tamañoActual = parseFloat(window.getComputedStyle(botonSi).fontSize);
    botonSi.style.fontSize = `${tamañoActual + 5}px`;
});

botonSi.addEventListener('click', () => {
    // Cambia el título y el GIF
    titulo.textContent = '¡Sabía que dirías que sí, mi niña!';
    gif.src = 'https://media.tenor.com/lCKwsD2OW1kAAAAj/happy-cat-happy-happy-cat.gif';
});