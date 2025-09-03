document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        to_email: 'azserviciosdelimpieza@gmail.com', 
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        empresa: document.getElementById('empresa').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value
    };

    try {
        emailjs.init('iMwjxITzJQ3ItjXAI');
        
        const response = await emailjs.send("service_h9kkgam","template_0ie24oh", formData);
        
        if (response.status === 200) {
            alert('Mensaje enviado con éxito!');
            this.reset();
        } else {
            throw new Error(`Error al enviar el mensaje. Código de estado: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error.message || error);
        alert('Hubo un error al enviar el mensaje. Por favor, intente nuevamente.');
    }
});

// Responsive navbar hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open');
});

// Cierra el nav al hacer click en cualquier link dentro del nav
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('header nav').classList.remove('open');
        document.body.classList.remove('menu-open');
    });
});