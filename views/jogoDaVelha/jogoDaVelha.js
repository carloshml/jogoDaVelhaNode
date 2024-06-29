const jogoDaVelha = {
    tabuleiro: ['', '', '', '', '', '', '', '', ''],
    simbolos: {
        opcoes: ['X', 'O'],
        jogador: 1,
        mudar: function () {
            this.jogador = this.jogador === 1 ? 0 : 1;
        }
    },
    sequenciasVencedoras: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ],
    container_element: {},
    game_over: false,
    init: function (container) {
        this.container_element = container;
    },
    draw: function () {
        let conteudo = '';
        for (i in this.tabuleiro) {
            conteudo += `<div class='local-jogada' onclick="jogoDaVelha.jogar(${i})"><span> ${this.tabuleiro[i]} </span></div>`;
        }
        this.container_element.innerHTML = `<div class="game">${conteudo}</div>`;
        // ------------- jogador ----------------
        const jogador = document.createElement('div');
        jogador.id = 'jogador';
        jogador.innerHTML = ` É a vez do <strong>${this.simbolos.opcoes[this.simbolos.jogador === 1 ? 0 : 1]} </strong> jogar `;
        jogador.classList.add('mensagem');
        jogador.classList.add('jogador-cor');
        this.container_element.appendChild(jogador);
        // ------------- mesangem ----------------
        const mensagem = document.createElement('div');
        mensagem.id = 'mensagens';
        mensagem.classList.add('mensagem');
        mensagem.classList.add('mensagem-cor');
        this.container_element.appendChild(mensagem);
    },
    jogar: function (posicao) {
        if (this.game_over) {
            return false;
        }
        if (this.tabuleiro[posicao]) {
            this.notificar('Posição já foi ocupada', 1000);
            return;
        }
        this.simbolos.mudar();
        this.tabuleiro[posicao] = this.simbolos.opcoes[this.simbolos.jogador];
        this.draw();
        if (!this.verificarVitoria()) {
            this.verificarTabuleiroCheio();
        }
    },
    verificarTabuleiroCheio: function () {
        let todosOcupado = true;
        this.tabuleiro.forEach(element => {
            if (!element) {
                todosOcupado = false;
            }
        });
        if (todosOcupado) {
            this.notificarGameOver(true);
        }
    },
    verificarVitoria: function () {
        this.sequenciasVencedoras.forEach(elemento => {
            if (this.tabuleiro[elemento[0]] === this.simbolos.opcoes[this.simbolos.jogador]
                && this.tabuleiro[elemento[1]] === this.simbolos.opcoes[this.simbolos.jogador]
                && this.tabuleiro[elemento[2]] === this.simbolos.opcoes[this.simbolos.jogador]) {
                this.notificarGameOver();
                return true;
            }
        });
    },
    notificarGameOver: function (ninguemVenceu) {
        if (ninguemVenceu) {
            this.notificar(` Ninguém venceu, joguem novamente !!!`, 25000);
        } else {
            this.notificar(`${this.simbolos.opcoes[this.simbolos.jogador]} Venceu 🎉🎉🥳🎉🎈🎈🎈 !!!`, 25000);
        }
        this.game_over = true;
        this.tabuleiro = ['', '', '', '', '', '', '', '', ''];
        const botaoJogarDeNovo = document.getElementById('jogar-de-novo');
        botaoJogarDeNovo.style.display = 'flex';
    },
    jogarDeNovo: function () {
        this.game_over = false;
        const botaoJogarDeNovo = document.getElementById('jogar-de-novo');
        botaoJogarDeNovo.style.display = 'none';
        jogoDaVelha.draw();
    },
    notificar: function (mensagem, tempo) {
        const diVmensagem = document.getElementById('mensagens');
        diVmensagem.innerHTML = mensagem;
        setTimeout(() => {
            diVmensagem.innerHTML = '';
        }, tempo);
    }
};
