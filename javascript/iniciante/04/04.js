let tentativas = 3;
let palpite = 0;
let recomecar = '';
const numeroSecreto = geraNumeroAleatorio();
alert('Tenho um número secreto de 1 a 10. Você consegue adivinhar?');
while (tentativas > 0 && palpite != numeroSecreto) {
    palpite = prompt(`Qual é o numero secreto? Você tem ${tentativas} tentativas.`)
    if (palpite == numeroSecreto) {
        alert(`Parabéns, você acertou! O número secreto é ${numeroSecreto}`)
        jogarNovamente();
    } else if (tentativas > 0) {
        alert(`Não é esse o numero!`);
        tentativas--;
        if (tentativas == 0) {
            alert(`Fim de jogo! Esgotaram suas tentativas. O número secreto era ${numeroSecreto}.`);
            jogarNovamente();
        }
    }


}


function geraNumeroAleatorio() {
    const numeroGerado = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return numeroGerado;
}

function jogarNovamente() {
    while (recomecar.toUpperCase() != 'SAIR' && recomecar.toUpperCase() != 'SIM') {
        recomecar = prompt('Quer Jogar Novamente? Digite [sim] ou [sair]]')
        recomecar.toUpperCase() == 'SIM' ? reiniciaJogo() : recomecar.toUpperCase() == 'SAIR' ? alert('Foi bom jogar com você! Até mais!') : alert('Opção inválida! Tente novamente.');
    }

}

function reiniciaJogo() {
    window.location.reload();
}