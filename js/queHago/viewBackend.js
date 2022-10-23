
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

export default viewBackend;


/* CARRUSEL */

import loadBackendProjects from "../loadBackendProjects.js";

const loadBackendProjects = async () => {
    const data = await loadBackendProjects();

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
