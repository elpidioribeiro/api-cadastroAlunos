const express = require('express');
const { listaAlunos, obterAluno, adicionarAluno, deletarAluno } = require('./controladores/alunos');


const rotas = express();

rotas.get('/', listaAlunos);
rotas.get('/:id', obterAluno);
rotas.post('/', adicionarAluno);
rotas.delete('/:id', deletarAluno);



module.exports = rotas;