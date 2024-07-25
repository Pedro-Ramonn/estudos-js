const btnLivros = document.querySelectorAll('.btn')

btnLivros.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    const tipo = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => 
        livro.categoria == tipo
    )
    exibirOsLivrosNaTela(livrosFiltrados)
}