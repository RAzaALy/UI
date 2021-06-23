const scrollBtn = document.querySelector('.scrollTop')

window.addEventListener('scroll',()=>{
    scrollBtn.classList.toggle('active', window.scrollY > 200)    
    // if(window.scrollY > 200){
    //     scrollBtn.classList.add('active')
    // }else{
    //     scrollBtn.classList.remove('active')
    // }
})

scrollBtn.addEventListener('click',()=>{
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})