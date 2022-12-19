const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

/* adicionando evento ao botão */
botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo') /* toggle alterna a visualiação */ 
})