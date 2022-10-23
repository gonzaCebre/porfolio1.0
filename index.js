
//      LOAD DATA FRONTEND
const loadData = async () => {
    try {
        let response = await fetch('data.json');
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}   

//      LOAD DATA BACKEND
const loadBackendData = async () => {
    try {
        let response = await fetch('backendProjects.json');
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}  


//      LOAD DATA CREATIVE
const loadCreativeData = async () => {
    try {
        let response = await fetch('creativeProjects.json');
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}   

//  ALIEN ANIMATION
const alienAnimation = () => {

    let creative = document.getElementById('creative');
    let alienHead = document.getElementById('alienHead');
    let alienLeft = document.getElementById('alienHandLeft');
    let alienRight = document.getElementById('alienHandRight');


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
                alienWarning.src = './media/img/fotos/alien-warning-min.png';
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
alienAnimation();

//      ALIEN WARNING
const alienWarning = () => {
    if(screen.width < 991){
        setTimeout(function(){
            const cartel = document.createElement('div');
            cartel.innerHTML = 'Abrí la web en PC para ver la magia ;)';
            cartel.classList.add('cartel');
    
            const alienWarning = document.createElement('img');
            alienWarning.src = './media/img/fotos/alien-warning-min.png'
            alienWarning.classList.add('alien-warning');
    
            document.body.appendChild(alienWarning);
            document.body.appendChild(cartel);

    
            setTimeout(function(){
                document.body.removeChild(cartel);
                document.body.removeChild(alienWarning);
            }, 8000);
        }, 5000)
    }
}
alienWarning();

//      GONZA TEXT ANIMATE
const gonzaTextAnimate = () => {
    let gonzaText = document.getElementById('gonzaText');
    let fotoGonzaIndex = document.getElementById('fotoGonzaIndex');
    let fotoGonzaAlienIndex = document.getElementById('fotoGonzaAlienIndex');
    gonzaText.addEventListener('mouseover', () => {
        fotoGonzaAlienIndex.classList.remove('noMostrar');
        fotoGonzaIndex.classList.add('noMostrar');
    });
    gonzaText.addEventListener('mouseleave', () => {
        fotoGonzaAlienIndex.classList.add('noMostrar');
        fotoGonzaIndex.classList.remove('noMostrar');
    });
}
gonzaTextAnimate();

//      SECCIÓN "QUÉ HAGO"
const blobChange = () => {


    //ANIMATIONS
    let animacionServiciosFrontend = document.getElementById('animacionServiciosFrontend');
    let animacionServiciosBackend = document.getElementById('animacionServiciosBackend');
    let animacionServiciosCreative = document.getElementById('animacionServiciosCreative');


    //TITLES
    let frontendTitle = document.getElementById('frontendTitle');
    let backendTitle = document.getElementById('backendTitle');
    let creativeTitle = document.getElementById('creativeTitle');

    //CONTAINERS
    let frontendContainer = document.getElementById('frontendContainer');
    let backendContainer = document.getElementById('backendContainer');
    let creativeContainer = document.getElementById('creativeContainer');

    //HIDING ANIMATIONS
    window.onload = () => {
        animacionServicios.classList.add('noMostrar');
    }

    //DOWN ARROW
    let frontendArrow = document.getElementById('frontendArrow');

    //TEXT
    let frontendText = document.getElementById('frontendText');


    //FRONTEND SELECTED
    frontendTitle.addEventListener('click', ()=> {
        let contenido = frontendTitle.nextElementSibling;
        if (contenido.classList.contains('noMostrar')){
            contenido.classList.remove('noMostrar'); //Abre el contenedor
            animacionServiciosFrontend.classList.remove('noMostrar'); //Muestra la animacion
            animacionServiciosBackend.classList.add('noMostrar'); //Oculta la animacion
            animacionServiciosCreative.classList.add('noMostrar'); //Oculta la animacion

            //Modifica las flechas
            frontendArrow.classList.add('up-arrow');
            frontendArrow.classList.add('selected');
            backendArrow.classList.remove('up-arrow');
            backendArrow.classList.remove('selected');
            creativeArrow.classList.remove('up-arrow');
            creativeArrow.classList.remove('selected');

            //Modifica los textos
            frontendText.classList.add('selected');
            backendText.classList.remove('selected');
            creativeText.classList.remove('selected');

            //Oculta los otros contenedores
            creativeContainer.classList.add('noMostrar');
            backendContainer.classList.add('noMostrar');

        }else {
            contenido.classList.add('noMostrar'); //Oculta el contenedor
            frontendArrow.classList.remove('up-arrow'); //Vuelve la flecha a su estado original
            frontendArrow.classList.remove('selected'); //Vuelve la flecha a su estado original
            frontendText.classList.remove('selected'); //Vuelve el texto a su estado original
            animacionServiciosFrontend.classList.add('noMostrar');
        }
    });


    //BACKEND SELECTED
    backendTitle.addEventListener('click', ()=> {
        let contenido = backendTitle.nextElementSibling;
        if (contenido.classList.contains('noMostrar')){

            //Oculta los otros contenedores
            frontendContainer.classList.add('noMostrar');
            creativeContainer.classList.add('noMostrar');

            //Muestra el contenido
            contenido.classList.remove('noMostrar'); //Abre el contenedor
            animacionServiciosFrontend.classList.add('noMostrar'); //Muestra la animacion
            animacionServiciosBackend.classList.remove('noMostrar'); //Oculta la animacion
            animacionServiciosCreative.classList.add('noMostrar'); //Oculta la animacion

            //Modifica la flecha
            backendArrow.classList.add('up-arrow');
            backendArrow.classList.add('selected');
            frontendArrow.classList.remove('up-arrow');
            frontendArrow.classList.remove('selected');
            creativeArrow.classList.remove('up-arrow');
            creativeArrow.classList.remove('selected');

            //Pinta el texto
            backendText.classList.add('selected');
            frontendText.classList.remove('selected');
            creativeText.classList.remove('selected');




        }else {
            contenido.classList.add('noMostrar'); //Oculta el contenedor
            backendArrow.classList.remove('up-arrow'); //Vuelve la flecha a su estado original
            backendArrow.classList.remove('selected'); //Vuelve la flecha a su estado original
            backendText.classList.remove('selected'); //Vuelve el texto a su estado original
            animacionServiciosBackend.classList.add('noMostrar');
        }
    });


    //CREATIVE SELECTED
    creativeTitle.addEventListener('click', ()=> {
        let contenido = creativeTitle.nextElementSibling;
        if (contenido.classList.contains('noMostrar')){

            //Oculta los otros contenedores
            frontendContainer.classList.add('noMostrar');
            backendContainer.classList.add('noMostrar');

            //Muestra el contenido
            contenido.classList.remove('noMostrar'); //Abre el contenedor
            animacionServiciosFrontend.classList.add('noMostrar'); //Muestra la animacion
            animacionServiciosBackend.classList.add('noMostrar'); //Oculta la animacion
            animacionServiciosCreative.classList.remove('noMostrar'); //Oculta la animacion

            //Modifica la flecha
            creativeArrow.classList.add('up-arrow');
            creativeArrow.classList.add('selected');
            frontendArrow.classList.remove('up-arrow');
            frontendArrow.classList.remove('selected');
            backendArrow.classList.remove('up-arrow');
            backendArrow.classList.remove('selected');

            //Pinta el texto
            creativeText.classList.add('selected');
            frontendText.classList.remove('selected');
            backendText.classList.remove('selected');


        }else {
            contenido.classList.add('noMostrar'); //Oculta el contenedor
            creativeArrow.classList.remove('up-arrow'); //Vuelve la flecha a su estado original
            creativeArrow.classList.remove('selected'); //Vuelve la flecha a su estado original
            creativeText.classList.remove('selected'); //Vuelve el texto a su estado original
            animacionServiciosCreative.classList.add('noMostrar');
        }
    });

}
blobChange();

//      FRONTEND PROJECTS
const viewFrontend = () => {

    //ABRE EL MODAL
    let viewFrontend = document.getElementById('viewFrontend');
    let frontendModal = document.getElementById('frontendModal');

    viewFrontend.addEventListener('click', ()=>{
        frontendModal.classList.remove('noMostrar');
    })

    //Volver al index
    let volverAIndex = document.getElementById('volverAIndex');
    volverAIndex.addEventListener('click', ()=>{
        console.log('cerrar proyectos front')
        frontendModal.classList.add('noMostrar');
    })

}
viewFrontend();

const loadFrontendProjects = async () => {
    const data = await loadData();

    data.forEach(project => {

        // Creando contenedor de proyecto
        const pantallaFrontend = document.getElementById('pantallaFrontend');
        const proyecto = document.createElement('div');
        proyecto.classList.add('proyecto');

        //Agregando titulo del proyecto
        const proyectoTitle = document.createElement('p');
        proyectoTitle.innerHTML = project.title;
        proyectoTitle.classList.add('proyecto__title');
        proyecto.appendChild(proyectoTitle);

        //Agregando imagen del proyecto
        const proyectoImg = document.createElement('img');
        proyectoImg.src = project.imgDesktop;
        proyecto.appendChild(proyectoImg); 

        // Agregando escucha al click
        proyecto.addEventListener('click', () => {

            let frontendProjectContainer = document.getElementById('frontendProjectContainer');
            frontendProjectContainer.classList.remove('noMostrar');

            let projectTitle = document.getElementById('projectTitle');
            projectTitle.innerHTML = project.title;

            let projectDescription = document.getElementById('projectDescription');
            projectDescription.innerHTML = project.description;

            let desktopImg = document.getElementById('desktopImg');
            desktopImg.setAttribute('href', project.imgDesktop);

            let mobileImg = document.getElementById('mobileImg');
            mobileImg.setAttribute('href', project.imgMobile);

            let projectUrl = document.getElementById('projectUrl');
            projectUrl.href = project.projectUrl;

            let githubUrl = document.getElementById('githubUrl');
            githubUrl.setAttribute('href', project.githubUrl);

        })

        pantallaFrontend.appendChild(proyecto);



    });


}

loadFrontendProjects();

let frontendProjectContainer = document.getElementById('frontendProjectContainer');


let closeProject = document.getElementById('closeProject');
closeProject.addEventListener('click', () => {
    frontendProjectContainer.classList.add('noMostrar');
})

//      BACKEND PROJECTS
const viewBackend = () => {

    //ABRE EL MODAL
    let viewBackend = document.getElementById('viewBackend');
    let backendModal = document.getElementById('backendModal');

    viewBackend.addEventListener('click', ()=>{
        backendModal.classList.remove('noMostrar');
    })

    //Volver al index
    let volverAIndexBackend = document.getElementById('volverAIndexBackend');
    volverAIndexBackend.addEventListener('click', ()=>{
        backendModal.classList.add('noMostrar');
    })

}

viewBackend();

const loadBackendProjects = async () => {
    const data = await loadBackendData();

    data.forEach(project => {

        // Creando contenedor de proyecto
        const backendProjects = document.getElementById('backendProjects');
        const backendProject = document.createElement('div');
        backendProject.classList.add('backend__project');

        //Titulo del proyecto
        const backendProjectTitle = document.createElement('div');
        backendProjectTitle.classList.add('backend__project__title');
        backendProjectTitle.classList.add('backend-text');

        const arrow = document.createElement('i');
        arrow.classList.add('fa-solid');
        arrow.classList.add('fa-angle-right');
        arrow.classList.add('backend-arrow');
        backendProjectTitle.appendChild(arrow);

        const titleTextContainer = document.createElement('div');
        titleTextContainer.classList.add('backend-text');
        titleTextContainer.classList.add('title-text-container');

        const titleTextConst = document.createElement('p');
        titleTextConst.innerHTML = 'const ';
        titleTextConst.classList.add('backend-text')
        titleTextContainer.appendChild(titleTextConst);

        const titleText = document.createElement('p');
        titleText.innerHTML = project.title;
        titleText.classList.add('backend-text');
        titleText.classList.add('title-text');
        titleTextContainer.appendChild(titleText);

        const titleTextApertura = document.createElement('p');
        titleTextApertura.innerHTML = ' ={';
        titleTextApertura.classList.add('backend-text')
        titleTextContainer.appendChild(titleTextApertura);
        
        backendProjectTitle.appendChild(titleTextContainer);

        //Contenedor de descripcion
        const backendProjectDescriptionContainer = document.createElement('div');
        backendProjectDescriptionContainer.classList.add('backend__project__description__container');
        backendProjectDescriptionContainer.classList.add('noMostrar');
        backendProjectDescriptionContainer.id = 'backendProjectDescriptionContainer';


        //DESCRIPCIÓN
        const descriptionContainer = document.createElement('div');
        /* descriptionContainer.classList.add('flex'); */

        const descriptionTitle = document.createElement('p');
        descriptionTitle.innerHTML = 'descripcion: ';
        descriptionTitle.classList.add('backend-text')
        descriptionTitle.classList.add('green')
        descriptionContainer.appendChild(descriptionTitle);

        const descriptionText = document.createElement('p');
        descriptionText.innerHTML = `'${project.description}'`;
        descriptionText.classList.add('backend-text');
        descriptionText.classList.add('white');
        descriptionContainer.appendChild(descriptionText);

        backendProjectDescriptionContainer.appendChild(descriptionContainer);
        
        //PROJECT URL
        const projectUrlContainer = document.createElement('div');

        const projectUrlTitle = document.createElement('p');
        projectUrlTitle.innerHTML = `urlProyecto: `;
        projectUrlTitle.classList.add('backend-text');
        projectUrlTitle.classList.add('green');
        projectUrlContainer.appendChild(projectUrlTitle);

        const projectUrl = document.createElement('a');
        projectUrl.innerHTML = `'${project.projectUrl}'`;
        projectUrl.href = project.projectUrl;
        projectUrl.classList.add('backend-text');
        projectUrl.classList.add('white');
        projectUrlContainer.appendChild(projectUrl);

        backendProjectDescriptionContainer.appendChild(projectUrlContainer);

        //GITHUB URL
        const githubUrlContainer = document.createElement('div');

        const githubUrlText = document.createElement('p');
        githubUrlText.innerHTML = `urlGithub: `;
        githubUrlText.classList.add('backend-text')
        githubUrlText.classList.add('green')
        githubUrlContainer.appendChild(githubUrlText);

        const githubUrl = document.createElement('a');
        githubUrl.innerHTML = `'${project.githubUrl}'`;
        githubUrl.href = project.githubUrl;
        githubUrl.classList.add('backend-text')
        githubUrl.classList.add('white')
        githubUrlContainer.appendChild(githubUrl);

        backendProjectDescriptionContainer.appendChild(githubUrlContainer);

        //TECNOLOGIAS
        const technologiesContainer = document.createElement('div');

        const technologiesText = document.createElement('p');
        technologiesText.innerHTML = `tecnologias: `;
        technologiesText.classList.add('backend-text');
        technologiesText.classList.add('green');
        technologiesContainer.appendChild(technologiesText);

        const technologies = document.createElement('p');
        technologies.innerHTML = `'${project.projectUrl}'`;
        technologies.classList.add('backend-text');
        technologies.classList.add('white');
        technologiesContainer.appendChild(technologies);

        backendProjectDescriptionContainer.appendChild(technologiesContainer);

        //Cierre
        const cierreText = document.createElement('p');
        cierreText.innerHTML = '}';
        cierreText.classList.add('backend-text');


        backendProject.appendChild(backendProjectTitle);
        backendProject.appendChild(backendProjectDescriptionContainer);
        backendProject.appendChild(cierreText);
        backendProjects.appendChild(backendProject);

    });

    const backendArrow = document.querySelectorAll('.backend-arrow');
    const backendTitles = document.querySelectorAll('.backend__project__title');
    backendTitles.forEach(element => {
        element.addEventListener('click', (e)=> {            
            const descriptionContainer = element.nextSibling;
            const arrow = element.firstChild;
            if(descriptionContainer.classList.contains('noMostrar') ) {
                descriptionContainer.classList.remove('noMostrar');
                arrow.style = 'transform: rotate(90deg);'
            } else {             
                descriptionContainer.classList.add('noMostrar');
                arrow.style = 'transform: rotate(0deg);';
            }


        })
    });


}

loadBackendProjects();

//      CREATIVE PROJECTS
const viewCreative = () => {

    //ABRE EL MODAL
    let viewCreative = document.getElementById('viewCreative');
    let creativeModal = document.getElementById('creativeModal');

    viewCreative.addEventListener('click', ()=>{
        creativeModal.classList.remove('noMostrar');
    })

    //Volver al index
    let volverAIndexCreative = document.getElementById('volverAIndexCreative');
    volverAIndexCreative.addEventListener('click', ()=>{
        creativeModal.classList.add('noMostrar');
    })

}
viewCreative();

const loadCreativeProjects = async () => {
    const data = await loadCreativeData();

    data.forEach(project => {

        // Creando contenedor de proyecto
        const pantallaCreative = document.getElementById('pantallaCreative');
        const proyecto = document.createElement('div');
        proyecto.classList.add('proyecto--creative');

        //Agregando titulo del proyecto
        const proyectoTitle = document.createElement('p');
        proyectoTitle.innerHTML = project.title;
        proyectoTitle.classList.add('proyecto__title');
        proyecto.appendChild(proyectoTitle);

        //Agregando imagen del proyecto
        const proyectoImg = document.createElement('img');
        proyectoImg.src = project.imgUrl;
        proyecto.appendChild(proyectoImg); 

        // Agregando escucha al click
        proyecto.addEventListener('click', () => {

            let creativeProjectContainer = document.getElementById('creativeProjectContainer');
            creativeProjectContainer.classList.remove('noMostrar');

            let projectTitle = document.getElementById('creativeProjectTitle');
            projectTitle.innerHTML = project.title;

            let projectDescription = document.getElementById('creativeProjectDescription');
            projectDescription.innerHTML = project.description;

            let projectImg = document.getElementById('creativeProjectImg');
            projectImg.src = project.imgUrl;

        });

        pantallaCreative.appendChild(proyecto);



    });


}

loadCreativeProjects();

let creativeProjectContainer = document.getElementById('creativeProjectContainer');


let closeCreativeProject = document.getElementById('closeCreativeProject');
closeCreativeProject.addEventListener('click', () => {
    creativeProjectContainer.classList.add('noMostrar');
})


//      MENU HAMBURGUESA
const hamburguerMenu = () => {
    const menuBtn = document.getElementById('menuBtn');
    const navbarLinks = document.getElementById('navbarLinks');

    let menuOpen = false;


    menuBtn.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
          } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
          }
    });

    //Cierra el menu al clickear sobre alguna opción
    navbarLinks.addEventListener('click', ()=> {
      navbarLinks.classList.remove('active');
      menuBtn.classList.remove('open');
      menuOpen = false;
    })
}
hamburguerMenu();


//      INTERSECTION OBSERVER
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
intersectionObserver();


//      ANIMACION DEL OVNI

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
ovniAnimation();

