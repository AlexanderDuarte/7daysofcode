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
const btnEnviar = document.getElementById('enviar');



btnEnviar.addEventListener('click', () => {
    nome = pegaValor('nome');
    idade = pegaValor('idade');
    linguagem = pegaValor('linguagem');
    exibeMensagem();
});

function pegaValor(id) {
    return document.getElementById(id).value;
}

function exibeMensagem() {
    bloco.innerHTML = `

        <p class="texto">Olá, ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</p>

    `;
    setTimeout(feedbackLinguagem, 5000);

}

function feedbackLinguagem() {
    bloco.innerHTML = `
    
    <p class="texto">Você gosta de estudar ${linguagem}?</p>
    <p class="texto-menor"> Responda com o número 1 para SIM ou 2 para NÃO.</p>
    <input type="text" id="opcao">
    <button id="enviar-feedback">Enviar</button>

    `;
    const btnEnviarFeedback = document.getElementById('enviar-feedback');
    btnEnviarFeedback.addEventListener('click', () => {
        opcao = pegaValor('opcao');
        console.log(opcao);
        if (opcao == 1) {
            bloco.innerHTML = `
            <p class="texto">Muito bom! Continue estudando e você terá muito sucesso</p>
            <button id="recomecar">Recomeçar</button>
            `;
            const btnRecomecar = document.getElementById('recomecar');
            btnRecomecar.addEventListener('click', () => {

                window.location.reload();
            });

        } else {
            bloco.innerHTML = `
            <p class="texto">Ahh que pena... Já tentou aprender outras linguagens?</p>
            <button id="recomecar">Recomeçar</button>
            `;
            const btnRecomecar = document.getElementById('recomecar');
            btnRecomecar.addEventListener('click', () => {

                window.location.reload();

            });
        }
    });
}
