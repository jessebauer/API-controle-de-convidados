const express = require('express');

const rotas = express();

const { listarConvidados, verificarPresenca, adicionarConvidado, deletarConvidado } = require('./controladores/gerenciadorConvidados');


rotas.use(express.json());

rotas.get('/convidados', listarConvidados); // Listar todos os convidados

rotas.get('/verificar', verificarPresenca); // Verificar se o convidado está presente

rotas.post('/convidados', adicionarConvidado); // Adicionar convidado

rotas.delete('/convidados', deletarConvidado); // Deletar convidado

module.exports = rotas