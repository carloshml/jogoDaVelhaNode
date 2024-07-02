let valores = [];
function adicionarValorNoFinal(numero) {
    const letra = encontrarLetra(numero);
    if (!letra) {
        return;
    }



    if (valores.includes(numero)) {
        return;
    }

    valores.push(numero);
    const coluna = document.querySelector(`th[id="th-${letra.toLowerCase()}"]`);
    // Encontre a linha (tr) correspondente ao elemento <th>
    const linha = coluna.parentElement;

    // Crie uma nova célula <td> com o valor fornecido
    const novaCelula = document.createElement('td');
    novaCelula.textContent = numero;

    // Insira a nova célula no final da linha
    linha.appendChild(novaCelula);
    enviarValores(valores);
}
function encontrarLetra(valor) {
    valor = Number(valor);
    let letra = '';
    if ((valor >= 1 && valor <= 15)) {
        letra = 'B'
    } else if ((valor >= 16 && valor <= 30)) {
        letra = 'I'
    } else if ((valor >= 31 && valor <= 45)) {
        letra = 'N'
    } else if ((valor >= 46 && valor <= 60)) {
        letra = 'G'
    } else if ((valor >= 61 && valor <= 75)) {
        letra = 'O'
    }
    return letra;
}

async function getTableBingo() {
    return await fetch('http://localhost:3000/bingo/valores', {
        method: 'GET'
        
    })
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });
}

function enviarValores(valores) {
    fetch('http://localhost:3000/bingo/valores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(valores),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta da API:', data);
            // Faça algo com a resposta da API aqui
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });
}
