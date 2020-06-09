const { Usuario } = require("../models");

async function validaCadastro (req, res, next) {
    try {
        let { nome, email, senha, areaAtuacao } = req.body;

        if (!nome || nome.length <= 3) {
            throw new Error('Nome deve conter 3 caracteres no minímo')
        }
        const infoUser = await Usuario.findOne({ where: { email } });
        if (infoUser) {
            throw new Error('E-mail já cadastrado')
        }
        if (!senha || senha.length < 6) {
            throw new Error('Senha deve conter 6 caracteres no minímo')
        }
        if (!areaAtuacao) {
            throw new Error('Campo atuação não pode ser vazio')
        }

        next()
    } catch(err) {
        let arrayErros = []
        arrayErros.push(err.message)

        return res.render('cadastrar', {error: arrayErros});
    }
}

module.exports = validaCadastro;