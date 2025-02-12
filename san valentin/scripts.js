const titulo = document.getElementById('titulo');
const gif = document.getElementById('gif');
const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');

// Tamaño original del botón "Sí"
const tamañoOriginal = parseFloat(window.getComputedStyle(botonSi).fontSize);

// Lista de GIFs para cambiar cuando se presione "No"
const gifs = ['https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fgato-sorprendido-gif-2100480603424472130&psig=AOvVaw2WMKDZOGVU4Y2Q6rXZO9GQ&ust=1739334884903000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDytMHluosDFQAAAAAdAAAAABAE']; // Agrega aquí los nombres de tus GIFs
let indiceGif = 0;

// Función para cambiar el GIF
function cambiarGif() {
    gif.src = gifs[indiceGif];
    indiceGif = (indiceGif + 1) % gifs.length; // Avanza al siguiente GIF
}

// Evento para el botón "No"
botonNo.addEventListener('click', () => {
    // Aumenta el tamaño del botón "Sí"
    const tamañoActual = parseFloat(window.getComputedStyle(botonSi).fontSize);
    botonSi.style.fontSize = `${tamañoActual + 5}px`;

    // Cambia el GIF
    cambiarGif();
});

// Evento para el botón "Sí"
botonSi.addEventListener('click', () => {
    // Restaura el tamaño original del botón "Sí"
    botonSi.style.fontSize = `${tamañoOriginal}px`;

    // Cambia el título y el GIF final
    titulo.textContent = '¡Sabía que dirías que sí, mi niña! TE AMOOOOOOOOOOOOOOOO ❤️❤️❤️❤️❤️❤️❤️❤️❤️';
    gif.src = 'https://i.namu.wiki/i/vcPIh-2LKgTCpeKuzLpVs1uGs9RHtZDezU438Wk5za0W18Zf_A9k7OO9kAz4yzWW31KjB2Talrzbldmvjv5KGw.gif';
});
