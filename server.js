const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'formulario_snake'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para recibir respuestas del formulario
app.post('/respuestas', (req, res) => {
    const respuesta = req.body;
    const query = 'INSERT INTO respuestas SET ?';
    
    db.query(query, respuesta, (err, result) => {
        if (err) {
            return res.status(500).send('Error al guardar la respuesta');
        }
        res.status(200).send('Respuesta guardada con éxito');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
