

const ovniAnimation = () => {

    let ovni = document.getElementById('ovni');
        
    /* ANIMACION OVNI */
    setInterval(function(){
        ovni.style.animation = 'shake 350ms ease';
    }, 7000);
    
    setInterval(function(){
        ovni.style.animation = 'float 350ms ease';
    }, 8000);

}

export default ovniAnimation;