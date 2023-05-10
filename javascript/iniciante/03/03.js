alert('Seja bem vindo(a) ao jogo Dev Simulator!');
let areaInicial = 0;
let areaFront = 0;
let fullstack = 0;
let areaBack = 0;
let aprenderMais = 1;
let listaAprenderMais = [];
const bloco = document.getElementById('bloco');

while (areaInicial != 1 && areaInicial != 2) {
    escolhaArea();
}


function escolhaArea() {
    areaInicial = prompt('Qual área quer seguir? Digite [1] para Front-End ou [2] para Back-End.');
    areaInicial == 1 ? escolhaFront() : areaInicial == 2 ? escolhaBack() : alert('Opção inválida! Tente novamente.');
}

function escolhaFront() {
    alert('Ótimo! Você escolheu Front-End!');

    while (areaFront != 1 && areaFront != 2) {
        areaFront = prompt('Dentro da área de Front-End, o que quer aprender? Digite [1] para React ou [2] para Vue.');
        areaFront == 1 ? alert('Ótimo! Você aprenderá React!') : areaFront == 2 ? alert('Maravilha! Você aprenderá Vue!') : alert('Opção inválida! Tente novamente.');
    }
    fullstackOrNotFullstack('Front-End');
    escolhaMais();
}


function escolhaBack() {
    alert('Ótimo! Você escolheu Back-End!');

    while (areaBack != 1 && areaBack != 2) {
        areaBack = prompt('Dentro da área de Back-End, o que quer aprender? Digite [1] para C# ou [2] para Java.');
        areaBack == 1 ? alert('Ótimo! Você aprenderá C#!') : areaBack == 2 ? alert('Maravilha! Você aprenderá Java!') : alert('Opção inválida! Tente novamente.');
    }
    fullstackOrNotFullstack('Back-End');
    escolhaMais();
}

function escolhaMais() {
    while (aprenderMais != 2) {
        aprenderMais = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite [1] para OK ou [2] para terminar');
        aprenderMais == 1 ? aprendeMais() : aprenderMais == 2 ? fim() : alert('Opção inválida! Tente novamente.');
    }
}

function fullstackOrNotFullstack(area) {
    while (fullstack != 1 && fullstack != 2) {
        fullstack = prompt(`Você escolheu começar por ${area}. Quer continuar nessa área ou quer seguir carreira Fullstack? Digite [1] para ser Dev ${area} ou [2] para ser Dev Fullstack.}`);
        fullstack == 1 ? alert(`Ótimoo! Você seguirá como Dev ${area}`) : fullstack == 2 ? alert('Beleza, você passará a explorar uma carreira Fullstack!') : alert('Opção inválida! Tente novamente.');
    }

}

function aprendeMais() {
    const tecnologia = prompt('O que mais gostaria de aprender?');
    listaAprenderMais.push(tecnologia)
    alert(`Perfeito! Vai aprender ${tecnologia}`)
}

function fim() {
    alert('Maravilha! Você concluiu o game Dev Simulator!');
    bloco.innerHTML = `<p class="titulo-final"> Veja tudo o que aprendeu!</p>`;
    bloco.innerHTML += `<p class="texto-final">Você começou pela área <span class="destaque">${exibeAreaInicial()}</span> e aprendeu primeiro <span class="destaque">${exibeEscolha()}</span>.</p>`;
    bloco.innerHTML += `<p>Escolheu seguir a carreira <span class="destaque">${exibeCarreira()}</span>.</p>`
    if(listaAprenderMais.length > 0){
        bloco.innerHTML += `
        <p class="texto-final"> Você também escolheu aprender:</p>
        <ul class="lista-tecnologia">`;
        
        listaAprenderMais.forEach((tecnologia) => {
            bloco.innerHTML += `<li class="item__lista-tecnologia">${tecnologia}</li>`;
        });
        bloco.innerHTML += '</ul>';

        
    }

    
    bloco.innerHTML += `<p class="texto-final">Muito obrigado por jogar! :-D</p>`;
}

function exibeAreaInicial(){
    if (areaInicial == 1) {
        return 'Front-End';
    } else {
        return 'Back-End';
    }
}

    function exibeEscolha() {
        if (areaFront != 0) {
            if (areaFront == 1) {
                return 'React';
            } else {
                return 'Vue';
            }
        } else {
            if (areaBack == 1) {
                return 'C#';
            } else {
                return 'Java';
            }

        }
    }

    function exibeCarreira(){
        if(fullstack == 1){
            return exibeAreaInicial();
        } else {
            return 'Fullstack';
        }
    }