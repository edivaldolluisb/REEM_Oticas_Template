var abrir_menu = window.document.querySelector('.menu_btn')
var fechar_menu = window.document.querySelector('.fechar_menu_btn')
var menu = window.document.querySelector('.menu_menu')

//abrir menu
abrir_menu.addEventListener('click', () =>{
    menu.style.display='flex'
    fechar_menu.style.display='block'
})

//fechar menu
fechar_menu.addEventListener('click', () =>{
    menu.style.display='none'
    fechar_menu.style.display='none'
})


