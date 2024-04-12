const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/registroDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conectado a la base de datos MongoDB');
});

// Definir el esquema de los registros
const registroSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    numero: String
});

const Registro = mongoose.model('Registro', registroSchema);

// Configuración de Express para manejar solicitudes JSON
app.use(express.json());

// Ruta para manejar la solicitud POST del formulario de registro
app.post('/registro', async (req, res) => {
    try {
        const nuevoRegistro = new Registro(req.body);
        await nuevoRegistro.save();
        res.status(201).send('Registro exitoso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
