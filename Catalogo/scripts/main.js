// Desplazamiento suave al hacer clic en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});