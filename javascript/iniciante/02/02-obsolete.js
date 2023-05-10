/* let nome = prompt('Qual seu nome?');
let idade = prompt('Quantos anos você tem?');
let linguagem = prompt('Qual linguagem de programação você está estudando?');


console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);


let opcao = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

opcao == 1 ? console.log('Muito bom! Continue estudando e você terá muito sucesso.'): opcao == 2 ? console.log('Ahh que pena... Já tentou aprender outras linguagens?'): console.log('que?'); */
let nome;
let idade;
let linguagem;
let opcao;
const bloco = document.getElementById('bloco');

pedeNome();

function pedeNome() {
    bloco.innerHTML = `<p id="texto">Qual seu nome?</p>`;
    bloco.innerHTML += `
        <input type="text" name="nome" id="nome">
        <button id="enviar">Enviar</button>
        `;
    const botaoEnviar = document.getElementById('enviar');


    botaoEnviar.addEventListener('click', (evento) => {
        evento.preventDefault();
        nome = document.getElementById('nome').value;
        console.log(nome)
        pedeIdade();

    });
}

function pedeIdade() {
    bloco.innerHTML = `<p id="texto">Quantos anos você tem?</p>`;
    bloco.innerHTML += `
        <input type="number" name="idade" id="idade">
        <button id="enviar">Enviar</button>
        `;
    const botaoEnviar = document.getElementById('enviar');


    botaoEnviar.addEventListener('click', (evento) => {
        evento.preventDefault();
        idade = document.getElementById('idade').value;
        console.log(idade)
        pedeLinguagem();
    });
}

function pedeLinguagem() {
    bloco.innerHTML = `<p id="texto">Qual linguagem de programação você está estudando?</p>`;
    bloco.innerHTML += `
        <input type="text" name="linguagem" id="linguagem">
        <button id="enviar">Enviar</button>
        `;
    const botaoEnviar = document.getElementById('enviar');


    botaoEnviar.addEventListener('click', (evento) => {
        evento.preventDefault();
        linguagem = document.getElementById('linguagem').value;
        console.log(linguagem)
        exibeMensagem();

    });
}

function exibeMensagem() {
    bloco.innerHTML = `<p id="texto">Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</p>`;
    bloco.innerHTML += `
    Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.
        <input type="text" name="opcao" id="opcao">
        <button id="enviar">Enviar</button>
        `;
    const botaoEnviar = document.getElementById('enviar');


    botaoEnviar.addEventListener('click', (evento) => {
        evento.preventDefault();
        opcao = document.getElementById('opcao').value;

        if (opcao == 1) {
            bloco.innerHTML = `<p id="texto">Muito bom! Continue estudando e você terá muito sucesso.!</p>
            <button id="enviar">Recomeçar</button>`;

            const botaoRecomecar = document.getElementById('enviar');
            botaoRecomecar.addEventListener('click', () => {
                window.location.reload();
            });
        } else {
            bloco.innerHTML = `<p id="texto">Ahh que pena... Já tentou aprender outras linguagens?</p>
            <button id="enviar">Recomeçar</button>
            `;
        
            const botaoRecomecar = document.getElementById('enviar');
            botaoRecomecar.addEventListener('click', () => {
                window.location.reload();
            });

        }


    });
}

function pedeDados(dado, mensagem, idName, tipoDado){
    bloco.innerHTML = `<p id="texto">${mensagem}</p>`;
    bloco.innerHTML += `<input type="${tipoDado}" name="${idName}" id="idName">`;
    bloco.innerHTML += `<button id="enviar">Enviar</button>`;
    const botaoEnviar = document.getElementById('enviar');
    botaoEnviar.addEventListener('click', (evento) => {
        evento.preventDefault();
        dado = document.getElementById(idName).value;
        
    });

}









