const robotron = document.querySelector("#robotron");
const subtrair = document.querySelector("#subtrair");
const adicionar = document.querySelector("#adicionar");
const controle = document.querySelectorAll("[data-controle");
const estatistica = document.querySelectorAll("[data-estatistica");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipularAtributos(evento.target.dataset.controle, evento.target.parentNode);
        manipularEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
    })
})

function dizOla(nome) {
    console.log("Olá! "+nome);
}

function manipularAtributos(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao==="-") {
        peca.value = parseFloat(peca.value)>0?parseFloat(peca.value)-1:0.0;
    }
    else{
        peca.value = parseFloat(peca.value)+1;
    }
    
}

function manipularEstatisticas(peca, operacao) {
    const pecass = document.querySelector("[data-contador]");
    estatistica.forEach((elemento) => {
        elemento.textContent = parseFloat(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        console.log(pecas[peca][elemento.dataset.estatistica]);
        console.log(peca);
    })
}
dizOla("Sulevan");