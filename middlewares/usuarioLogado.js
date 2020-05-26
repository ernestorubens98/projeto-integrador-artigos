function usuarioLogado(req, res, next) {
    if(!req.session.usuario) {
        res.redirect('/usuario/login')
    }
    next()
}

module.exports = usuarioLogado;