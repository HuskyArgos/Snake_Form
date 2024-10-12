// Función para ir a la segunda sección del formulario
function goToQuestions() {
    // Obtener las dos secciones del formulario
    var formSection1 = document.getElementById('formSection1');
    var formSection2 = document.getElementById('formSection2');

    // Validar que los campos de la primera sección estén completos
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var genero = document.getElementById('genero').value;

    // Si los campos están llenos, pasar a la segunda sección
    if (nombre !== "" && edad !== "" && genero !== "") {
        formSection1.style.display = 'none';  // Ocultar primera sección
        formSection2.style.display = 'block';  // Mostrar segunda sección
    } else {
        alert('Por favor, completa todos los campos antes de continuar.');
    }
}

// Enviar los datos del formulario al servidor
document.getElementById('formSection2').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío normal del formulario

    const formData = {
        nombre: document.getElementById('nombre').value,
        edad: document.getElementById('edad').value,
        genero: document.getElementById('genero').value,
        pregunta1: document.getElementById('pregunta1').value,
        pregunta2: document.getElementById('pregunta2').value,
        pregunta3: document.getElementById('pregunta3').value,
        pregunta4: document.getElementById('pregunta4').value,
        pregunta5: document.getElementById('pregunta5').value,
        pregunta6: document.getElementById('pregunta6').value,
        pregunta7: document.getElementById('pregunta7').value,
        pregunta8: document.getElementById('pregunta8').value,
        pregunta9: document.getElementById('pregunta9').value,
        pregunta10: document.getElementById('pregunta10').value,
        pregunta11: document.getElementById('pregunta11').value,
        pregunta12: document.getElementById('pregunta12').value,
        pregunta13: document.getElementById('pregunta13').value,
        pregunta14: document.getElementById('pregunta14').value,
        pregunta15: document.getElementById('pregunta15').value
    };

    fetch('http://localhost:3000/respuestas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Respuesta guardada con éxito');
            // Reiniciar el formulario o hacer cualquier otra acción
            formSection2.reset();  // Reiniciar los campos de la segunda sección si es necesario
        } else {
            alert('Error al guardar la respuesta');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al guardar la respuesta');
    });
});

// Llama a la función goToQuestions cuando el botón de continuar sea presionado
document.getElementById('continueButton').addEventListener('click', goToQuestions);
