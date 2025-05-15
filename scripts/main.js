// contenido del dom
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// mostrar/ocultar enlaces con animación en celulares
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active'); // Rotar el botón de menú
});


// barra flotante al hacer scroll hacia abajo (pc)
let ultimaPosicionScroll = 0;
const barraFlotante = document.getElementById('barraFlotante');
window.addEventListener('scroll', () => {
    const scrollActual = window.scrollY;
    if (scrollActual > 120 && scrollActual > ultimaPosicionScroll) {
        barraFlotante.classList.add('visible');
    } else if (scrollActual < 80) {
        barraFlotante.classList.remove('visible');
    }
    ultimaPosicionScroll = scrollActual;
});

// ocultar barra flotante al hacer clic en un enlace interno
document.querySelectorAll('.enlaces-flotante a').forEach(enlace => {
    enlace.addEventListener('click', () => {
        barraFlotante.classList.remove('visible');
    });
});

// scroll suave
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// botón de llamada
document.querySelector('.btn.primary').addEventListener('click', () => {
    window.location.href = 'tel:+51939533315';
});

// botón de wsp
document.querySelector('.btn.secondary').addEventListener('click', () => {
    const numero = '51939533315';
    const mensaje = encodeURIComponent('hola, quisiera informacion');
    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
});


