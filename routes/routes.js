module.exports = function (app) {

    const urls = [
        {
            url: 'chose-gamers-jogo-velha',
            nome: 'Jogo da Velha'
        },
        {
            url: 'bingo',
            nome: 'Bingo'
        },
        {
            url: 'create-gamer',
            nome: 'Cadastrar Jogador'
        },
        {
            url: 'read-gamers',
            nome: 'Ver Jogadores'
        },
    ];

    const usuarios = [];
    let jogadores;
    // ---- rotas --------------
    app.get('/', (req, res) => {
        res.render('index', { urls });
    });
    app.post('/jogoDaVelha', (req, res) => {
        const dados = req.body;
        jogadores = { dados };
        res.render('jogoDaVelha/jogoDaVelha', jogadores);
    });
    app.get('/chose-gamers-jogo-velha', (req, res) => {
        res.render('jogoDaVelha/chose-gamers', { usuarios });
    });
    app.get('/read-gamers', (req, res) => {
        res.render('jogoDaVelha/usuario/read-gamers', { usuarios });
    });
    app.get('/create-gamer', (req, res) => {
        res.render('jogoDaVelha/usuario/create-gamer');
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
