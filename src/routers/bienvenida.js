const express = require('express');
const router = express.Router();

// Ruta de la página de bienvenida
app.get('/', (req, res) => {
    res.render('welcome', { year: new Date().getFullYear() });
});

// Agrega tus otras rutas aquí...

module.exports = router;
