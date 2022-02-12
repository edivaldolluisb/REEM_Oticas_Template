

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
    var lst_total = localStorage.getItem('total');  
    if (produtos === null || produtos === undefined) {
        localStorage.setItem('produtos', JSON.stringify([]))
        produtos = JSON.parse(localStorage.getItem('produtos'))
    }
    if (total === null || total === undefined) {
        localStorage.setItem('total', 0)
        lst_total = localStorage.getItem('total', 0) 
    }


    var cartsize = produtos.length

    produtos[cartsize] = [nome, preco, quantidade]
    localStorage.setItem('produtos', JSON.stringify(produtos))






    /* guardar o valor do total */
    /*let _total = localStorage.getItem('total')*/
    /*_total = Number(_total) + total*/
    var total = lst_total + preco * quantidade
    console.log(total)
    localStorage.setItem('total', total)
}

