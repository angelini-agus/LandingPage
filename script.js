document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        empresa: document.getElementById('empresa').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value
    };

    try {
        // Aquí puedes agregar tu lógica para enviar los datos
        // Por ejemplo, usando fetch para enviar a un servidor:
        /*
        const response = await fetch('tu-url-de-api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        */

        // Por ahora, solo mostraremos un alert
        alert('Mensaje enviado con éxito!');
        this.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, intente nuevamente.');
    }
});