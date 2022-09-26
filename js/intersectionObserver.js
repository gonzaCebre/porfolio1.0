

const intersectionObserver = () => {

    /* SECCIONES */
    let queHago = document.getElementById('queHago');
    let matcheamos = document.getElementById('matcheamos');

    const cargarSeccion = (entries) => {
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('animate__backInUp');
                entry.target.classList.remove('hidden');
            }
        })
        
    }

    const observer = new IntersectionObserver(cargarSeccion, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    observer.observe(queHago);
    observer.observe(matcheamos);


    // BOTÓN SUBMIT
    let submit = document.getElementById('submit');
    let ovni = document.getElementById('ovni');
    let ovniSubmit = document.getElementById('ovniSubmit');
       

    const ovniBoton = (entries) => {
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                ovni.style.animation = 'toSubmit 1s ease 500ms';
                setTimeout( () => {
                    ovni.classList.add('noMostrar');
                    ovniSubmit.classList.remove('noMostrar');
                    submit.style = 'animation: pulse 2s ease-in-out infinite; color: white;'
                }, 1000);
            } else {
                ovni.classList.remove('noMostrar');
                ovniSubmit.classList.add('noMostrar');
                submit.style = 'color: #161616;'
            }
        })
    }

    

    const observerSubmit = new IntersectionObserver(ovniBoton, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    observerSubmit.observe(submit);

}

export default intersectionObserver;