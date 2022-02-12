

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
    var produtos = (localStorage.getItem('produtos'));
    var lst_total = localStorage.getItem('total');  
    console.log(produtos)





    /* guardar o valor do total */
    var total = Number(lst_total) + Number(preco * quantidade)
    console.log(total)
    localStorage.setItem('total', total)
}

