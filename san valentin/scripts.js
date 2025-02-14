const titulo = document.getElementById('titulo');
const gif = document.getElementById('gif');
const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');

// Tamaño original del botón "Sí"
const tamañoOriginal = parseFloat(window.getComputedStyle(botonSi).fontSize);

// Lista de GIFs para cambiar cuando se presione "No"
const gifs = ['https://media.tenor.com/Nqf3-gUgySsAAAAM/cat-sad-gato-triste.gif','https://media.tenor.com/gm_mhpzK1wsAAAAM/gato-cat.gif'
    ,'https://i.pinimg.com/originals/21/0f/0a/210f0a8cc74bbd9f8be4c5def6ecced6.gif','https://media.tenor.com/t7_iTN0iYekAAAAM/sad-sad-cat.gif'
    ,'https://media.tenor.com/RZzU2_IbHDEAAAAM/cat-side-eye.gif',''
]; // Agrega aquí los nombres de tus GIFs
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
