module.exports = function (app) {

    const urls = [
        {
            url: 'jogoDaVelha',
            nome: 'Jogo da Velha'
        },
        {
            url: 'formulario',
            nome: 'Cadastrar Usuário'
        },
        {
            url: 'usuarios',
            nome: 'Ver Usuários'
        },
    ];

    const usuarios = [ ];
    // ---- rotas --------------
    app.get('/', (req, res) => {
        res.render('index', { urls });
    });
    app.get('/usuarios', (req, res) => {
        res.render('usuarios', { usuarios });
    });
    app.get('/jogoDaVelha', (req, res) => {
        res.render('jogoDaVelha/jogoDaVelha');
    });
    app.get('/formulario', (req, res) => {
        res.render('formulario/formulario');
    });
    app.post('/formulario', (req, res) => {
        // pode usar esses dados para salvar algo; 
        console.log('  req.body   ', req.body);
        req.body.nome = req.body.nome ? req.body.nome.toUpperCase() : '';
        req.body.descricao = req.body.descricao ? req.body.descricao.toUpperCase() : '';
        req.body.idade = req.body.idade;
        usuarios.push(req.body);  
        res.setHeader('Content-Type', 'application/json');        
        res.end(JSON.stringify(req.body, null, 3));
    });
}
