// OBJETIVO 1 - quando clicar no botão do personagem da lista, marcar o botãp como selecionado

// passo 1: pegar os botões no JS pra poder verificar quando o usuario clicar em cima de um deles

const botoes = document.querySelectorAll('.botao');

// OBJETIVO 2 - quando cliar no botão do personagem mostrar as informações do personagem
// passo 1 - pegar os personagens no JS para mostrar ou esconder eles
const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        
        botao.classList.add("selecionado")

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

    personagens[indice].classList.add("selecionado");
        
    });
});
