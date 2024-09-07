// console.log(dados [1] .titulo);






// para cada dado dentro da lista de dados





function pesquisar() {
    let resultados = "";
    let titulo = "";
    let descricao = "";

    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa);
    

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        if (titulo.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                    <h2>    
                        <a href="#" target="_blank">${dado.titulo}
                        </a>
                    </h2>
                    <p class="descricao-meta">${dado.preco}  - ${dado.descricao}
                    </p>
                    <img src=${dado.img} alt="" width="500" height="250" > 
                    </div>
            `;

        }
        
   if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
   }

}
section.innerHTML = resultados;
}









