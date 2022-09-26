
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

export default viewFrontend;


/* CARRUSEL */

import loadData from "../loadData.js";

const loadProjects = async () => {
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

loadProjects();

let frontendProjectContainer = document.getElementById('frontendProjectContainer');


let closeProject = document.getElementById('closeProject');
closeProject.addEventListener('click', () => {
    frontendProjectContainer.classList.add('noMostrar');
})

/* 
const carrusel = async () => {
    const data = await traerProyectos();
    const imagenes = data.map(proyecto => {
        return proyecto.imgDesktop;
    });
    const imagenesMobile = data.map(proyecto => {
        return proyecto.imgMobile;
    });
    const titles = data.map(proyecto => {
        return proyecto.title;
    });
    const descriptions = data.map(proyecto => {
        return proyecto.description;
    });
    
    
    let contador = 0;
  
    let adelante = document.getElementById('adelante');
    let atras = document.getElementById('atras');
    let desktopImg = document.getElementById('desktopImg'); 
    let proyectoTitle = document.getElementById('proyectoTitle'); 
    let proyectoDescription = document.getElementById('proyectoDescription'); 

    desktopImg.setAttribute('href', imagenes[0]);
    proyectoTitle.textContent = titles[0];
    proyectoDescription.textContent = descriptions[0];
    contador = 0;
    
    
    atras.addEventListener('click', () => {
        if(contador > 0 ) {
            desktopImg.setAttribute('href', imagenes[contador - 1]);
            proyectoTitle.textContent = titles[contador - 1];
            proyectoDescription.textContent = descriptions[contador - 1];
            contador--;
        }else {
            desktopImg.setAttribute('href', imagenes[imagenes.length - 1]);
            proyectoTitle.textContent = titles[titles.length - 1];
            proyectoDescription.textContent = descriptions[descriptions.length - 1];
            contador = imagenes.length - 1;
        }
    })
    
    adelante.addEventListener('click', () => {
        if(contador < imagenes.length -1 ) {
            desktopImg.setAttribute('href', imagenes[contador + 1]);
            proyectoTitle.textContent = titles[contador + 1];
            proyectoDescription.textContent = descriptions[contador + 1];
            contador++;
        }else {
            desktopImg.setAttribute('href', imagenes[0]);
            proyectoTitle.textContent = titles[0];
            proyectoDescription.textContent = descriptions[0];
            contador = 0;
        }
    })
}

carrusel();

const frontendModal = document.getElementById('frontendModal');


const abrirModal = document.querySelectorAll('.abrirModal');
const cerrarModal = document.querySelectorAll('.cerrar-modal');

abrirModal.forEach(element => {
    element.addEventListener('click', ()=> {
        frontendModal.classList.remove('noMostrar');
    })
});
cerrarModal.forEach(element => {
    element.addEventListener('click', ()=> {
        frontendModal.classList.add('noMostrar');
    })
}); */