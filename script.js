caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + " ";
if (opcaoSelecionada.proxima !== undefined) {
atual = opcaoSelecionada.proxima;
} else {
mostraResultado();
return;
}
mostraPergunta();
}

function mostraResultado() {
caixaPerguntas.textContent = `Em 2049, ${nome}`;
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
caixaResultado.classList.add("mostrar");
botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

function jogaNovamente() {
atual = 0;
historiaFinal = "";

caixaResultado.classList.remove("mostrar");
mostraPergunta();
}

function substituiNome() {
for (const pergunta of perguntas) {
pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
}
}

substituiNome();