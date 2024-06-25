// src/backend/App.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Configurar o CORS para permitir requisições do frontend
app.use(cors());

// Middleware para análise de corpo de solicitação JSON
app.use(express.json());

// Usar as rotas definidas no arquivo routes.js com prefixo '/api'
app.use('/api', routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
