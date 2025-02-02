const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const porta = 3000;

app.use(cors()); // Habilita CORS
app.use(express.json()); // Permite JSON no futuro

// Middleware para verificar a chave de acesso
const verificarChave = (req, res, next) => {
  const chave = req.query.chave;
  if (chave === 'void-hub') {
    next();
  } else {
    res.status(401).json({ status: 'erro', mensagem: 'Não autorizado: Chave inválida' });
  }
};

// Rota para servir as bandeiras
app.get('/bandeira', verificarChave, async (req, res) => {
  const codigoPais = req.query.pais;
  if (!codigoPais) {
    return res.status(400).json({ status: 'erro', mensagem: 'Código do país não fornecido' });
  }

  // URL do novo repositório
  const apiGitHub = `https://api.github.com/repos/HaygoNunes/Flag-API/contents/flag/${codigoPais}.png`;

  try {
    const resposta = await axios.get(apiGitHub, {
      headers: { 'User-Agent': 'request' }, 
    });

    if (resposta.data.download_url) {
      res.redirect(resposta.data.download_url); 
    } else {
      res.status(404).json({ status: 'erro', mensagem: 'Bandeira não encontrada' });
    }
  } catch (erro) {
    res.status(500).json({ status: 'erro', mensagem: 'Erro ao buscar a bandeira' });
  }
});

// Inicia o servidor
app.listen(porta, () => {
  console.log(`API rodando em http://localhost:${porta}`);
});
