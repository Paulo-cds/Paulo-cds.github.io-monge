let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')


let aberto = false


function abrirOuFecharMenu() {
    if (aberto === true){
        aberto = false
        menuMobile.classList.remove('aberto')
        
    } else {
        aberto = true
        menuMobile.classList.add('aberto')
    }
}

function fecharMenu() {
    menuMobile.classList.remove('aberto')
}