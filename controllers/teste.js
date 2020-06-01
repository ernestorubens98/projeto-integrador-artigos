logarUsuario: async (req, res) => {
    let { email, senha } = req.body;
    let erroEmail = validationResult(req)

    if (!erroEmail.isEmpty()) {
        res.render('login', {errors: erroEmail.errors})
    }

    const infoUser = await Usuario.findOne({ where: { email } });

    if ( !infoUser ) {
        return res.render('login', { error: 'Usuário ou senha inválida!'  })
    }

    let senhaValida = await bcrypt.compare(senha, infoUser.senha)
    if ( !senhaValida ) {
        return res.render('login', { error: 'Usuário ou senha inválida!'  })
    }

    req.session.usuario = {
        nome: infoUser.nome,
        email: infoUser.email
    }

    res.redirect("/");
}

<% if (error) { %>
    <div class="alert alert-danger mb-3" role="alert">Usuário ou senha inválida!</div>
<% } %>

logarUsuario: async (req, res) => {
    let { email, senha } = req.body;
    let erroEmail = validationResult(req)

    try {
        if (!erroEmail.isEmpty()) {
            throw new Error('ERROR_SINTAX_EMAIL')
        }
        const infoUser = await Usuario.findOne({ where: { email } });
        if (!infoUser) {
            throw new Error('EMAIL_NOT_FOUND')
        }

        let senhaValida = await bcrypt.compare(senha, infoUser.senha)
        if (!senhaValida) {
            throw new Error('ERROR_PASSWORD')
        }

        req.session.usuario = {
            nome: infoUser.nome,
            email: infoUser.email
        }
        res.redirect("/");
    } catch (err) {
        switch (err.message) {
            case 'ERROR_SINTAX_EMAIL':
                return res.render('login', { err: erroEmail.errors });
            case 'EMAIL_NOT_FOUND':
                return res.render('login', { error: 'Usuário ou senha inválida!' });
            default:
                return res.render('login', { error: 'Usuário ou senha inválida!' });
        }
    }

}

                                <div class="alert alert-danger mb-3" role="alert"><%= errors[i].msg %></div>
<% for(let i = 0; i < errors.length; i++) { %>
    <li>
        <div class="alert alert-danger mb-3" role="alert"><%= errors[i].msg %></div>
    </li>
<% } %>