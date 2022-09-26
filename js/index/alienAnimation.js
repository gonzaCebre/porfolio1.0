
const alienAnimation = () => {
    /* ANIMACIÓN ALIEN */
    let creative = document.getElementById('creative');
    let gonza = document.getElementById('gonza');
    let alien = document.getElementById('alien');
    let alienHead = document.getElementById('alienHead');
    let alienLeft = document.getElementById('alienHandLeft');
    let alienRight = document.getElementById('alienHandRight');
    let index = document.getElementById('index');

    creative.addEventListener('mouseover', () => {
        alienHead.classList.remove('noMostrar');
        alienLeft.classList.remove('noMostrar');
        alienRight.classList.remove('noMostrar');
        alienLeft.style='animation: rotate-alien 2s backwards ease-out;';
        alienRight.style='animation: rotate-alien 2s backwards ease-out;';
        
        setTimeout(function(){
            alienRight.style='animation: none;';
            alienLeft.style='animation: none;';
        }, 1000);

    })
    creative.addEventListener('mouseout', () => {
        /* alien.classList.add('noMostrar') */;
        /* gonza.classList.remove('noMostrar'); */
        alienHead.classList.add('noMostrar');
        alienLeft.classList.add('noMostrar');
        alienRight.classList.add('noMostrar');
    })
}

export default alienAnimation;