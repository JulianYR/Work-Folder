document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header')
    const container = document.getElementById('container')
    const menuButton =  document.getElementById('menu')
    const links = document.querySelectorAll('a[href^="#"]')

    // Handle Scroll | Manejar desplazamiento
    function handleScroll(){
        container.classList.remove('menuopen')
        header.classList.toggle('sticky', window.scrollY >= 100)
    }

    // Handle Menu button click | Manejar clic en el botón Menú
    function handleMenuButtonClick(){
        header.classList.remove('sticky')
        container.classList.toggle('menuopen') 
    }

    // Handle links opened on click | Manejar enlaces abiertos al hacer clic
    function handleLinksClick(event){
        event.preventDefault()
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        if (targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    // Close menu to clicking | Cerrar menú al hacer clic
    function handleCloseMenu(event){
        if (!menuButton.contains(event.target)){
            // Check menu exit click | Verificar salida del menú al hace clic
            container.classList.remove('menuopen')
            header.classList.add('sticky')
        }
    }

    
    // Events to click | Eventos para hacer clic

    window.addEventListener('scroll', handleScroll)
    menuButton.addEventListener('click', handleMenuButtonClick)
    links.forEach(link => link.addEventListener('click', handleLinksClick))

    document.addEventListener('click', handleCloseMenu)

});document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header')
    const container = document.getElementById('container')
    const menuButton =  document.getElementById('menu')
    const links = document.querySelectorAll('a[href^="#"]')

    // Handle Scroll | Manejar desplazamiento
    function handleScroll(){
        container.classList.remove('menuopen')
        header.classList.toggle('sticky', window.scrollY >= 100)
    }

    // Handle Menu button click | Manejar clic en el botón Menú
    function handleMenuButtonClick(){
        header.classList.remove('sticky')
        container.classList.toggle('menuopen') 
    }

    // Handle links opened on click | Manejar enlaces abiertos al hacer clic
    function handleLinksClick(event){
        event.preventDefault()
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)
        if (targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    // Close menu to clicking | Cerrar menú al hacer clic
    function handleCloseMenu(event){
        if (!menuButton.contains(event.target)){
            // Check menu exit click | Verificar salida del menú al hace clic
            container.classList.remove('menuopen')
            header.classList.add('sticky')
        }
    }

    
    // Events to click | Eventos para hacer clic

    window.addEventListener('scroll', handleScroll)
    menuButton.addEventListener('click', handleMenuButtonClick)
    links.forEach(link => link.addEventListener('click', handleLinksClick))

    document.addEventListener('click', handleCloseMenu)

});