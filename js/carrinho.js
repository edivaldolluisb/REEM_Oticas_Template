var produtos = JSON.parse(localStorage.getItem('produtos'))
var total = localStorage.getItem('total', 0)

if (produtos === null || produtos === undefined) {
    localStorage.setItem('produtos', JSON.stringify([]))
    produtos = JSON.parse(localStorage.getItem('produtos'))
}

if (total === null || total === undefined) {
    localStorage.setItem('total', 0)
    total = localStorage.getItem('total')
}