module.exports = function (app) {

    const urls = [
        {
            url: 'jogoDaVelha',
            nome: 'Jogo da Velha'
        },
        {
            url: 'create-user',
            nome: 'Cadastrar Usuário'
        },
        {
            url: 'read-users',
            nome: 'Ver Usuários'
        },
    ];

    const usuarios = [];
    // ---- rotas --------------
    app.get('/', (req, res) => {
        res.render('index', { urls });
    });
    app.get('/jogoDaVelha', (req, res) => {
        res.render('jogoDaVelha/jogoDaVelha');
    });
    app.get('/read-users', (req, res) => {
        res.render('jogoDaVelha/usuario/read-users', { usuarios });
    }); 
    app.get('/create-user', (req, res) => {
        res.render('jogoDaVelha/usuario/create-user');
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
