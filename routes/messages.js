const express = require('express');
const router = express.Router();
const users = require('../mocks/users/users');
const messages = require('../mocks/messages/messages');

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

//Autenticar a los usuarios
router.post('/auth/logout', (req, res) => {
    res.send('Cierra la sesión');
});

// Enviar un nuevo mensaje
router.post('/messages/send', (req, res) => {
    res.send('Enviar un nuevo mensaje');
});

// Obtener todos los mensajes de un usuario específico
router.get('/messages/:userId', (req, res) => {
    const userMessages = messages.get(parseInt(req.params.userId));

    if (userMessages != null) {
        return res.status(200).send(userMessages);
    } else {
        return res.status(404).send('Not Found');
    }
});


module.exports = router;