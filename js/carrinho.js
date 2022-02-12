/*checar a local storage*/
var produtos = JSON.parse(localStorage.getItem('produtos'))
var total = localStorage.getItem('total', 0)
if (produtos === null || produtos === undefined) {
    console.log('entrou');
    localStorage.setItem('produtos', JSON.stringify([]))
    produtos = JSON.parse(localStorage.getItem('produtos'))
    console.log('produto criado na local storage')
}

if (total === null || total === undefined) {
    localStorage.setItem('total', 0)
    total = localStorage.getItem('total')
    console.log('total criado na local storage')
}


/* Colocar os produtos na tabela*/

console.log(produtos)

function adicionar_na_tabela() {
    const prodt = produtos
     
    for (let i = 0; i < prodt.length; i++) {
        console.log(prodt[i])

        console.log(prodt[i][0], prodt[i][1], prodt[i][2])

        //criar a linha da tabela
        var produto_tabela = document.createElement("TR");

        var nome  = document.createElement('TD')
        var nome_texto = document.createTextNode(prodt[i][0])
        nome.appendChild(nome_texto)

        var preco  = document.createElement('TD')
        var preco_texto = document.createTextNode(prodt[i][1])
        preco.appendChild(preco_texto)

        var quantidade  = document.createElement('TD')
        var quantidade_texto = document.createTextNode(prodt[i][2])
        quantidade.appendChild(quantidade_texto)

        //criar a td de eliminar
        let eliminar  = document.createElement('TD')
        let icon_eliminar = document.createElement('i')
        icon_eliminar.setAttribute("class", "fa-solid fa-xmark")
        eliminar.appendChild(icon_eliminar)

        //adicionar os dados na tr
        produto_tabela.append(nome, preco, quantidade, eliminar)

        window.document.querySelector('tbody').appendChild(produto_tabela)

    }
}
adicionar_na_tabela()
