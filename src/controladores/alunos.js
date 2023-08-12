let { alunos, proximoId } = require('../dados/colecao-alunos');




const listaAlunos = (req, res) => {
    res.status(200).json(alunos);
}

const obterAluno = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "o ID deve ser um número válido" });
    };

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    return res.status(200).json(aluno);

}

const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;
    if (!nome || !sobrenome || !idade || !curso) {
        res.status(400).json({ mensagem: 'Faltando informação necessária' });
    }

    if (nome === '' || sobrenome === '' || curso === '') {
        res.status(400).json({ mensagem: 'Algum campo está vazio' });
    }

    const alunoNovo = {
        id: proximoId++,
        nome,
        sobrenome,
        idade,
        curso,
    };

    alunos.push(alunoNovo);
    return res.status(201).json();

}


const deletarAluno = (req, res) => {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "o ID deve ser um número válido" });
    };
    const alunoDeletar = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!alunoDeletar) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id != Number(id)
    });

    return res.status(200).json(alunoDeletar);
}

module.exports = {
    listaAlunos,
    obterAluno,
    adicionarAluno,
    deletarAluno
};