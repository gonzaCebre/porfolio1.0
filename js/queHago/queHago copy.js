
const blobChange = () => {


    //ANIMATIONS
/*     let frontendAnimation = document.getElementById('frontendAnimation');
    let backendAnimation = document.getElementById('backendAnimation');
    let creativeAnimation = document.getElementById('creativeAnimation');
    let blobServicios = document.getElementById('blobServicios'); */

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
/*         backendAnimation.classList.add('noMostrar');
        frontendAnimation.classList.add('noMostrar');
        creativeAnimation.classList.add('noMostrar');
        blobServicios.classList.add('noMostrar'); */
    }

    //DOWN ARROW
    let frontendArrow = document.getElementById('frontendArrow');

    //TEXT
    let frontendText = document.getElementById('frontendText');
    let h2QueHago = document.getElementById('h2QueHago');



    //FRONTEND SELECTED
    frontendTitle.addEventListener('click', ()=> {
        let contenido = frontendTitle.nextElementSibling;
        if (contenido.classList.contains('noMostrar')){
            contenido.classList.remove('noMostrar'); //Abre el contenedor
            blobServicios.classList.remove('noMostrar'); //Muestra la animacion
            frontendAnimation.classList.remove('noMostrar'); //Muestra la animacion
            h2QueHago.classList.add('h2--margin'); 

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

            //Oculta las otras animaciones
            backendAnimation.classList.add('noMostrar');
            creativeAnimation.classList.add('noMostrar');

            //Oculta los otros contenedores
            creativeContainer.classList.add('noMostrar');
            backendContainer.classList.add('noMostrar');

        }else {
            contenido.classList.add('noMostrar'); //Oculta el contenedor
            frontendAnimation.classList.add('noMostrar'); //Oculta la animación
            frontendArrow.classList.remove('up-arrow'); //Vuelve la flecha a su estado original
            frontendArrow.classList.remove('selected'); //Vuelve la flecha a su estado original
            frontendText.classList.remove('selected'); //Vuelve el texto a su estado original
            blobServicios.classList.add('noMostrar');
            h2QueHago.classList.remove('h2--margin'); 
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
            blobServicios.classList.remove('noMostrar'); //Muestra la animacion
            backendAnimation.classList.remove('noMostrar'); //Muestra la animacion
            h2QueHago.classList.add('h2--margin'); 

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

            //Oculta las otras animaciones
            frontendAnimation.classList.add('noMostrar');
            creativeAnimation.classList.add('noMostrar');



        }else {
            contenido.classList.add('noMostrar'); //Oculta el contenedor
            backendAnimation.classList.add('noMostrar'); //Oculta la animación
            backendArrow.classList.remove('up-arrow'); //Vuelve la flecha a su estado original
            backendArrow.classList.remove('selected'); //Vuelve la flecha a su estado original
            backendText.classList.remove('selected'); //Vuelve el texto a su estado original
            blobServicios.classList.add('noMostrar');
            h2QueHago.classList.remove('h2--margin'); 
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
            blobServicios.classList.remove('noMostrar'); //Muestra la animacion
            creativeAnimation.classList.remove('noMostrar'); //Muestra la animacion
            h2QueHago.classList.add('h2--margin'); 

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

            //Oculta las otras animaciones
            frontendAnimation.classList.add('noMostrar');
            backendAnimation.classList.add('noMostrar');

        }else {
            contenido.classList.add('noMostrar'); //Oculta el contenedor
            creativeAnimation.classList.add('noMostrar'); //Oculta la animación
            creativeArrow.classList.remove('up-arrow'); //Vuelve la flecha a su estado original
            creativeArrow.classList.remove('selected'); //Vuelve la flecha a su estado original
            creativeText.classList.remove('selected'); //Vuelve el texto a su estado original
            blobServicios.classList.add('noMostrar');
            h2QueHago.classList.remove('h2--margin'); 
        }
    });

}


export default blobChange;