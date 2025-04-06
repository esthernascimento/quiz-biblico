//Lista de perguntas e respostas
const perguntas = [
    {
        pergunta: "Quem construiu a arca para salvar os animais do dilúvio?",
        respostas: [
            { opcao: "Moisés", correto: false },
            { opcao: "Abraão", correto: false },
            { opcao: "Noé", correto: true },
            { opcao: "Davi", correto: false }
        ]
    },
    {
        pergunta: "Quem é o filho de Deus?",
        respostas: [
            { opcao: "Pedro", correto: false },
            { opcao: "Jesus", correto: true },
            { opcao: "João", correto: false },
            { opcao: "José", correto: false }
        ]
    },
    {
        pergunta: "Qual o primeiro livro da Bíblia?",
        respostas: [
            { opcao: "Gênesis", correto: true },
            { opcao: "Êxodo", correto: false },
            { opcao: "Salmos", correto: false },
            { opcao: "Provérbios", correto: false }
        ]
    },
    {
        pergunta: "O que Jonas ficou dentro por três dias?",
        respostas: [
            { opcao: "Uma caverna", correto: false },
            { opcao: "Uma casa", correto: false },
            { opcao: "Um navio", correto: false },
            { opcao: "Um grande peixe", correto: true }
        ]
    },
    {
        pergunta: "Quem guiou o povo de Deus para fora do Egito?",
        respostas: [
            { opcao: "Davi", correto: false },
            { opcao: "Isaías", correto: false },
            { opcao: "Moisés", correto: true },
            { opcao: "Salomão", correto: false }
        ]
    },
    {
        pergunta: "Qual é o dia em que celebramos a ressurreição de Jesus?",
        respostas: [
            { opcao: "Natal", correto: false },
            { opcao: "Páscoa", correto: true },
            { opcao: "Pentecostes", correto: false },
            { opcao: "Quarta-feira de Cinzas", correto: false }
        ]
    },
    {
        pergunta: "Qual é o maior mandamento que Jesus nos ensinou?",
        respostas: [
            { opcao: "Amar a Deus sobre todas as coisas", correto: true },
            { opcao: "Não roubar", correto: false },
            { opcao: "Guardar o sábado", correto: false },
            { opcao: "Jejuar sempre", correto: false }
        ]
    },
    {
        pergunta: "Quem foi o rei que derrotou o gigante Golias?",
        respostas: [
            { opcao: "Salomão", correto: false },
            { opcao: "Davi", correto: true },
            { opcao: "Elias", correto: false },
            { opcao: "Samuel", correto: false }
        ]
    },
    {
        pergunta: "Onde Jesus nasceu?",
        respostas: [
            { opcao: "Jerusalém", correto: false },
            { opcao: "Nazaré", correto: false },
            { opcao: "Belém", correto: true },
            { opcao: "Egito", correto: false }
        ]
    },
    {
        pergunta: "O que significa 'perdoar'?",
        respostas: [
            { opcao: "Brigar com alguém", correto: false },
            { opcao: "Esquecer um amigo", correto: false },
            { opcao: "Revidar", correto: false },
            { opcao: "Deixar de lado a mágoa e amar", correto: true }
        ]
    }
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim")


let indiceAtual = 0;
let acertos = 0;
function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
    const perguntaAtual = perguntas[indiceAtual];
    perguntaElemento.innerHTML = perguntaAtual.pergunta;

    respostasElemento.innerHTML = "";


    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
        const resposta = perguntaAtual.respostas[i];
        const botao = document.createElement("button");

        botao.classList.add("botao-resposta");
        botao.innerText = resposta.opcao;
        botao.onclick = function () {

            if (resposta.correto) {
                acertos++;
            }
            indiceAtual++;
            if (indiceAtual < perguntas.length) {
                carregarPergunta();
            } else {
                finalizarJogo();
            }
        };

        respostasElemento.appendChild(botao);
    }
}
function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
}

carregarPergunta();
