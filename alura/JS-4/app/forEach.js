const elementoParaInserirLivros = document.getElementById('livros')

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => { //para cada livro eu incrementarei em 1 a contagem e trarei o livro da seguinte forma
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}

//FOREACH NÃO APRESENTA RETURN NO FINAL POIS ELE RETORNA O MESMO ARRAY ORIGINAL