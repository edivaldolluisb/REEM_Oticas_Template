

/* pegar os dados do produto*/
function pegar_produto(id, nome, preco) {

    //pegar o valor da quantidade
    let quantidade = parseInt(window.document.getElementById('prod_qt' + id).value)
    /*console.log(isNaN(quantidade))*/

    /*se o utilizador não adicioanr quantidade*/
    if (isNaN(quantidade)) {
        quantidade = 1
    }
    console.log(id, nome, preco, quantidade)



    /*guardar dados na local storage*/
    var produtos = JSON.parse(localStorage.getItem('produtos'));

    const array1 = produtos;

    // pass a function to map
    const map1 = array1.map(el => el[0]);
    const existe = map1.indexOf(nome)
    console.log(existe)
    console.log(map1);
    // ver se o produto existe na lista de produtos
    if (existe != -1) {
        console.log(existe)
        produtos[existe][2] += quantidade
        localStorage.setItem('produtos', JSON.stringify(produtos))

    }
    else {
        // adicionar o produto caso o produto não exista
        var cart_size = produtos.length

        console.log(produtos)

        produtos[cart_size] = [nome, preco, quantidade]
        localStorage.setItem('produtos', JSON.stringify(produtos))
        console.log('cartsize: ', cart_size)
        document.querySelector('.numero_itens').innerHTML = produtos.length

    }
    addedMsg()
    setTimeout(removerdisplay, 4000)
}

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
    return total
}
calcular_total_()



var produtos = JSON.parse(localStorage.getItem('produtos'));
document.querySelector('.numero_itens').innerHTML = produtos.length
console.table(produtos)


/*menssagem para mostrar adicionado ao produto*/

function addedMsg() {
    var Mensagens = document.querySelector('#Mensagens')

    const div = document.createElement("div");
    const texto = document.createTextNode("Produto adicionado ao carrinho");
    div.appendChild(texto);
    div.setAttribute("class", "added_carrinho_message")

    Mensagens.appendChild(div);
}

// função para remover as mensagens na div
function removerdisplay() {
    var menssagems = document.querySelectorAll('.added_carrinho_message')

    for (const menssagem of menssagems) {
        console.log('mensagem')
        menssagem.remove()
    }

}
//setTimeout(removerdisplay, 2000)

