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

    var produto_tabela = 

    var nome = 'produto'
    var preco = 0
    var quantidade = 0
     
    for (let i = 0; i < prodt.length; i++) {
        console.log(prodt[i])

        nome = prodt[i][0]
        preco = prodt[i][1]
        quantidade = prodt[i][2]

        console.log(prodt[i][0], prodt[i][1], prodt[i][2])
    }
}
adicionar_na_tabela()
