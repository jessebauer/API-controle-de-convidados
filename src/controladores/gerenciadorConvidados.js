const bancoDeDados = require('../dados/bancodedados');

const { convidados } = bancoDeDados


const listarConvidados = (req, res) => {
    res.status(200).json(convidados);

}

const verificarPresenca = (req, res) => {
    const { nome } = req.query;
    const convidado = convidados.find(convidado => convidado.toLowerCase() === nome.toLowerCase());
    if (convidado) {
        res.status(200).json({
            status: 'Convidado está presente',
            convidados
        })
    } else {
        res.status(200).json({
            status: 'Convidado não está presente'
        })
    }
}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;
    if (nome) {
        convidados.push(nome);
        res.status(200).json({
            status: 'Convidado adicionado com sucesso',
            convidados
        })
    } else {
        res.status(400).json({
            status: 'Nome não informado'
        })
    }
}

const deletarConvidado = (req, res) => {
    const { nome } = req.query;
    const convidado = convidados.find(convidado => convidado.toLowerCase() === nome.toLowerCase());
    if (convidado) {
        const index = convidados.indexOf(convidado);
        convidados.splice(index, 1);
        res.status(200).json({
            status: 'Convidado deletado com sucesso',
            convidados
        })
    } else {
        res.status(400).json({
            status: 'Convidado não encontrado'
        })
    }
}
module.exports = { listarConvidados, verificarPresenca, adicionarConvidado, deletarConvidado };


