const black = document.querySelector('.black');

// e.clientX  you can use insetead of pageX
window.addEventListener('mousemove',(e)=>{
    const x = e.clientX;
    black.style.left = x + 'px';
})


