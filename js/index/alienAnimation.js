
console.log(screen.width)


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
            if(screen.width > 991){
                alienHead.classList.remove('noMostrar');
                alienLeft.classList.remove('noMostrar');
                alienRight.classList.remove('noMostrar');
                alienLeft.style='animation: rotate-alien 2s backwards ease-out;';
                alienRight.style='animation: rotate-alien 2s backwards ease-out;';
                
                setTimeout(function(){
                    alienRight.style='animation: none;';
                    alienLeft.style='animation: none;';
                }, 1000);
            }else {
                const cartel = document.createElement('div');
                cartel.innerHTML = 'Abrí la web en PC para ver la magia ;)';
                cartel.classList.add('cartel');

                const alienWarning = document.createElement('img');
                alienWarning.src = './media/img/fotos/alien-warning.png'
                alienWarning.classList.add('alien-warning');


                document.body.appendChild(cartel);
                document.body.appendChild(alienWarning);

                setTimeout(function(){
                    document.body.removeChild(cartel);
                    document.body.removeChild(alienWarning);
                }, 4000);
            }

    
        })
        creative.addEventListener('mouseout', () => {

                alienHead.classList.add('noMostrar');
                alienLeft.classList.add('noMostrar');
                alienRight.classList.add('noMostrar');
            

        })
    

}

export default alienAnimation;