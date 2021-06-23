const bg = document.querySelector('.bg')

window.addEventListener('scroll' , (e)=>{
    bg.style.opacity = 1 - +window.pageYOffset/550+'';

    bg.style.top =  +window.pageYOffset+'px';
    bg.style.backgroundPositionY =  +window.pageYOffset+'px';
})