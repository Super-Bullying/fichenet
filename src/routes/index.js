const express = require('express');
const pool = require('../../db'); // Supondo que você tenha configurado a conexão com o banco de dados aqui
const router = express.Router();

// Rota para buscar todos os registros da tabela 'add_on' relacionados com 'jogo'
router.get('api/add_on/jogo', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT a.*, j.*
      FROM add_on a
      JOIN jogo j ON a.id_jogo = j.id_jogo
    `);
    res.json(rows);
  } catch (err) {
    console.error('Erro na rota /add_on/jogo:', err.message);
    res.status(500).send('Erro no servidor');
  }
});

// Rota para buscar um add-on específico pelo ID
router.get('api/add_on/jogo/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM add_on WHERE id_add_on = $1', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'Add-on não encontrado' });
    }
  } catch (err) {
    console.error('Erro na rota /add_on/jogo/:id:', err.message);
    res.status(500).send('Erro no servidor');
  }
});

// Rota para buscar todos os registros da tabela 'usuario' relacionados com 'jogo'
router.get('api/usuario/jogo', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT u.*, j.*
      FROM usuario u
      JOIN jogo j ON u.id_usuario = j.id_usuario
    `);
    res.json(rows);
  } catch (err) {
    console.error('Erro na rota /usuario/jogo:', err.message);
    res.status(500).send('Erro no servidor');
  }
});


// Rota para buscar um compra específico pelo ID
router.get('api/usuario/jogo/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM usuario WHERE id_usuario = $1', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'usuario não encontrado' });
    }
  } catch (err) {
    console.error('Erro na rota /usuario/jogo/:id:', err.message);
    res.status(500).send('Erro no servidor');
  }
});



// Rota para buscar todos os registros da tabela 'jogo' relacionados com 'compra'
router.get('api/jogo/compra', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT j.*, c.*
      FROM jogo j
      JOIN compra c ON j.id_jogo = c.id_jogo
    `);
    res.json(rows);
  } catch (err) {
    console.error('Erro na rota /jogo/compra:', err.message);
    res.status(500).send('Erro no servidor');
  }
});


// Rota para buscar um jogo específico pelo ID
router.get('api/jogo/compra/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows: jogoRows } = await pool.query('SELECT * FROM jogo WHERE id_jogo = $1', [id]);
    if (jogoRows.length === 0) {
      return res.status(404).json({ message: 'Jogo não encontrado' });
    }

    const jogo = jogoRows[0];

    res.json(jogo);
  } catch (err) {
    console.error('Erro na rota /jogo/compra/:id:', err.message);
    res.status(500).send('Erro no servidor');
  }
});





// Rota para buscar todos os registros da tabela 'compra' relacionados com 'usuario'
router.get('/compra/usuario', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT c.*, u.*
      FROM compra c
      JOIN usuario u ON c.id_usuario = u.id_usuario
    `);
    res.json(rows);
  } catch (err) {
    console.error('Erro na rota /compra/usuario:', err.message);
    res.status(500).send('Erro no servidor');
  }
});

// Rota para buscar um compra específico pelo ID
router.get('/compra/usuario/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM compra WHERE id_compra = $1', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: 'compra não encontrado' });
    }
  } catch (err) {
    console.error('Erro na rota /compra/usuario/:id:', err.message);
    res.status(500).send('Erro no servidor');
  }
});



module.exports = router;
