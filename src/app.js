const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');

app.use(express.json());
app.use(userRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});