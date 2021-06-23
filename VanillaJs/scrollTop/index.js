const scroll = document.getElementById('top')
window.addEventListener('scroll',(e)=>{
    scroll.style.transform = `rotate(${window.pageYOffset}deg)`
    // console.log(window.pageYOffset)
})


scroll.addEventListener('click',(e)=>{
    window.scrollTo({
        top : 0,
        behavior: 'smooth'
    })
})