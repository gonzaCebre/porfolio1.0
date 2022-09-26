
const gonzaTextAnimate = () => {
    let gonzaText = document.getElementById('gonzaText');
    let mainBlob = document.getElementById('mainBlob');
    gonzaText.addEventListener('mouseover', () => {
        mainBlob.classList.remove('floating');
        mainBlob.classList.add('animate__pulse');
        setTimeout(function(){
            mainBlob.classList.remove('animate__pulse');
            mainBlob.classList.add('floating');
        }, 2000)
    })
}

export default gonzaTextAnimate;