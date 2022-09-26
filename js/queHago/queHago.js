
const blobChange = () => {


    //ANIMATIONS
    let animacionServicios = document.getElementById('animacionServicios');


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
            animacionServicios.classList.remove('noMostrar'); //Muestra la animacion
            animacionServicios.src = './media/img/gifs/frontend.gif';

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
            animacionServicios.classList.add('noMostrar');
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
            animacionServicios.classList.remove('noMostrar'); //Muestra la animacion
            animacionServicios.src = './media/img/gifs/backend.gif';

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
            animacionServicios.classList.add('noMostrar');
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
            animacionServicios.classList.remove('noMostrar'); //Muestra la animacion
            animacionServicios.src = './media/img/gifs/creative.gif';

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
            animacionServicios.classList.add('noMostrar');
        }
    });

}


export default blobChange;