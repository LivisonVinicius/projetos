function seleciona(opcao,tipo){
    const opcaoSelecionada=document.querySelector(".Selecionada");
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove("Selecionada");
    }
    opcao.classList.add("Selecionada");

}