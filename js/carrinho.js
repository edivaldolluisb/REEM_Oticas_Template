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

        //adicionar na textarea
        var textarea_ = document.querySelector('#textarea_produtos');
        textarea_.value += '+ ' + prodt[i][0] + ', preco: ' + prodt[i][1] + ', quantidade: ' + prodt[i][2] + '\n';

        //criar a linha da tabela
        var produto_tabela = document.createElement("TR");

        var nome = document.createElement('TD')
        var nome_texto = document.createTextNode(prodt[i][0])
        nome.appendChild(nome_texto)

        var preco = document.createElement('TD')
        var preco_texto = document.createTextNode(prodt[i][1] + '€')
        preco.appendChild(preco_texto)

        var quantidade = document.createElement('TD')
        var quantidade_texto = document.createTextNode(prodt[i][2])
        quantidade.appendChild(quantidade_texto)

        //criar a td de eliminar
        let eliminar = document.createElement('TD')
        let icon_eliminar = document.createElement('i')
        icon_eliminar.setAttribute("class", "fa-solid fa-xmark")
        icon_eliminar.setAttribute("onclick", "remover_produto(" + i + ")");
        eliminar.appendChild(icon_eliminar)

        //adicionar os dados na tr
        produto_tabela.append(nome, preco, quantidade, eliminar)

        window.document.querySelector('tbody').appendChild(produto_tabela)

    }
}
adicionar_na_tabela()

// adicionar total

// calcular o total
function calcular_total_() {
    var produtos = JSON.parse(localStorage.getItem('produtos'));

    let total = 0
    for (const produto of produtos) {
        console.log(produto)
        var preco = parseFloat(produto[1])
        var quantidade = parseInt(produto[2])
        total += preco * quantidade
    }
    console.log(total)

    /* guardar o valor do total */
    localStorage.setItem('total', total)

    //mostrar o total
    window.document.querySelector('#div_total_compras').querySelector('span').innerHTML = total
    document.querySelector('#input_total').value = total
}
calcular_total_()


// remover produto

function remover_produto(n) {
    //n -> index do produto no array
    console.log('entrou na eliminação')

    let $produtos = JSON.parse(localStorage.getItem('produtos'))
    $produtos.splice(n, 1)
    localStorage.setItem('produtos', JSON.stringify($produtos))

    //atualizar após remover da lista
    console.log('fim da eliminação')
    //location.reload()
    removedMsg('Produto removido da lista')

    function refresh() {
        location.reload()
    }
    setTimeout(refresh, 1500)

}

/*menssagem para mostrar removido ao produto*/

function removedMsg(mensagem) {
    var Mensagens = document.querySelector('#Mensagens')

    const div = document.createElement("div");
    const texto = document.createTextNode(mensagem)
    div.appendChild(texto);
    div.setAttribute("class", "added_carrinho_message")

    Mensagens.appendChild(div);
}


