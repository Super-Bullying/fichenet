const { Pool } = require('pg');

// Configuração da conexão
const pool = new Pool({
  user: 'bruh',                     // Usuário do banco de dados PostgreSQL fornecido pelo Render.com
  host: 'dpg-cptatgmehbks73f238ig-a', // Host do banco de dados PostgreSQL fornecido pelo Render.com
  database: 'fichenet',             // Nome do banco de dados PostgreSQL criado no Render.com
  password: 'gTgQr2346aBFkc0UGTRVY3oXetdzZOmW',  // Senha do banco de dados PostgreSQL fornecida pelo Render.com
  port: 5432,                       // Porta padrão do PostgreSQL
});

// Teste a conexão
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco de dados:', err.stack);
  }
  console.log('Conectado ao banco de dados PostgreSQL!');
  release();
});

module.exports = pool;
