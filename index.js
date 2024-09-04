const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Rutas
const mensajeRoutes = require('./routes/messages');
app.use('/api/messages', menssageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
