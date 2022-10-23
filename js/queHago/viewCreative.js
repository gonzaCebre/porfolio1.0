
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

export default viewCreative;


/* CARRUSEL */

import loadCreativeProjects from "../loadCreativeProjects.js";

const loadCreativeProjects = async () => {
    const data = await loadCreativeProjects();

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

            /* let projectUrl = document.getElementById('creativeProjectUrl');
            projectUrl.href = project.projectUrl; */

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