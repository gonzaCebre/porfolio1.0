
const alienWarning = () => {
    if(screen.width < 991){
        setTimeout(function(){
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
            }, 8000);
        }, 5000)
    }
}

export default alienWarning;