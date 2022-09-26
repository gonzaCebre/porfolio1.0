
const menuAnimation = () => {
    
    /* ANIMACIÓN MENÚ */
    let lastScroll = 0;
    const header = document.getElementById('header');
    const cargarMenu = () => {
        header.classList.add('hidden');
        window.addEventListener('scroll', () => {
            let currentScroll = window.pageYOffset;
            
        
            if(currentScroll > lastScroll) {
                header.classList.add('hidden');
            }
            if(currentScroll < lastScroll) {
                header.classList.remove('hidden');
            }
        
            lastScroll = currentScroll;
        })
    }

    setTimeout(cargarMenu, 3000);
}

export default menuAnimation;