
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
