const express = require('express');
const router = express.Router();
const users = require('../mocks/users/users');

//Autenticar a los usuarios (Ejecutivos y Clientes)
router.post('/auth/login', (req, res) => {
    const {email, password} = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (!email || !password) {
        return res.status(400).send('Invalid data');
    } else if (user == null) {
        return res.status(401).send('Bad credentials.');
    }
    return res.status(200).send('Login successful!');
});

//Autenticar a los usuarios (Ejecutivos y Clientes)
router.post('/auth/logout', (req, res) => {
    res.send('Cierra la sesión');
});

// Enviar un nuevo mensaje (Requiere autenticación y autorización)
router.post('/messages/send', (req, res) => {
    res.send('Enviar un nuevo mensaje');
});

// Obtener todos los mensajes (paginación)
router.get('/messages', (req, res) => {
    res.send('Obtener todos los mensajes');
});

// Obtener todos los mensajes de un usuario específico (paginación)
router.get('/messages/{userId}', (req, res) => {
    res.send(`Obtener mensajes del usuario con ID ${req.params.userId}`);
});

// Obtener mensajes específico (paginación)
router.get('/messages/{messageId}', (req, res) => {
    res.send(`Obtener el mensaje con ID ${req.params.messageId}`);
});

// Eliminar un mensaje
router.delete('/messages/{messageId}', (req, res) => {
    res.send(`Eliminar el mensaje con ID ${req.params.messageId}`);
});

module.exports = router;