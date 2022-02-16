

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
    if (existe != -1) {
        console.log(existe)
        produtos[existe][2] += quantidade
        localStorage.setItem('produtos', JSON.stringify(produtos))

    }
    else {
        var lst_total = localStorage.getItem('total');
        var cart_size = produtos.length

        console.log(produtos)

        produtos[cart_size] = [nome, preco, quantidade]
        localStorage.setItem('produtos', JSON.stringify(produtos))
        console.table(produtos)
        console.log('cartsize: ', cart_size)
        document.querySelector('.numero_itens').innerHTML = produtos.length


        /* guardar o valor do total */
        var total = Number(lst_total) + Number(preco * quantidade)
        console.log(total)
        localStorage.setItem('total', total)
    }


}
var produtos = JSON.parse(localStorage.getItem('produtos'));
document.querySelector('.numero_itens').innerHTML = produtos.length
