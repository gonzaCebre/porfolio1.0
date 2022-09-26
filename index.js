

import gonzaTextAnimate from './js/index/gonzaTextAnimate.js'
gonzaTextAnimate();

import blobChange from './js/queHago/queHago.js';
blobChange();

import alienAnimation from './js/index/alienAnimation.js'
alienAnimation();

import menuAnimation from './js/menuAnimation.js'
/* menuAnimation(); */

import hamburguerMenu from './js/hamburguerMenu.js'
hamburguerMenu();

import intersectionObserver from './js/intersectionObserver.js';
intersectionObserver();

import ovniAnimation from './js/ovniAnimation.js'
ovniAnimation();

import viewFrontend from './js/queHago/viewFrontend.js'
viewFrontend();

import viewCreative from './js/queHago/viewCreative.js'
viewCreative();

import viewBackend from './js/queHago/viewBackend.js'
viewBackend();


/*      CARGANDO JSONS      */
import loadData from './js/loadData.js';
loadData();

import loadCreativeProjects from './js/loadCreativeProjects.js';
loadCreativeProjects();

import loadBackendProjects from './js/loadBackendProjects.js';
loadBackendProjects();



/* CARRUSEL */

/* let data;

const traerProyectos = async () => {
    try {
        let response = await fetch('data.json');
        let data = await response.json();        
        return data;
    } catch (error) {
        console.log(error);
    }
}    


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














