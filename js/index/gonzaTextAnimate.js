
const gonzaTextAnimate = () => {
    let gonzaText = document.getElementById('gonzaText');
    let fotoGonzaIndex = document.getElementById('fotoGonzaIndex');
    gonzaText.addEventListener('mouseover', () => {
        fotoGonzaIndex.src= './media/img/fotos/foto-gonza-alien.png';
    });
    gonzaText.addEventListener('mouseleave', () => {
        fotoGonzaIndex.src= './media/img/fotos/foto-gonza.png';
    });
}

export default gonzaTextAnimate;