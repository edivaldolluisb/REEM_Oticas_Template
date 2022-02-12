/*checar a local storage*/
var produtos = (localStorage.getItem('produtos'))
var total = localStorage.getItem('total', 0)
if (produtos === null || produtos === undefined) {
    console.log('criando produtos na local storage ...');
    localStorage.setItem('produtos', JSON.stringify([]))
    produtos = JSON.parse(localStorage.getItem('produtos'))
    console.log('produto criado na local storage')
}

if (total === null || total === undefined) {
    localStorage.setItem('total', 0)
    total = localStorage.getItem('total')
    console.log('total criado na local storage')
}