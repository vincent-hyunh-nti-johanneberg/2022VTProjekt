// Denna fil skall innehålla JavaScript (JS)
const nav = document.querySelector('.navlink')
const burger = document.querySelector('.burger')

function toggleMeny() {

    nav.classList.toggle('navActive')
    burger.classList.toggle('burger')
}

burger.addEventListener ('click', toggleMeny)
nav.addEventListener('click', toggleMeny)