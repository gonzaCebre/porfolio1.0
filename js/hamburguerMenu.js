
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

export default hamburguerMenu;