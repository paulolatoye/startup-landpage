const toggleButton = document.getElementsByClassName('hamburger')[0]
const navMenu = document.getElementsByClassName('nav-menu')[0]

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})