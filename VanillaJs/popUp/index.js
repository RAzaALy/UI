const popUp = document.querySelector('.popup')
const btn = document.querySelector('.btn')

window.addEventListener('load',()=>{
    setTimeout(() => {
        popUp.style.display = 'block';        
    }, 2000);

})

btn.addEventListener('click',()=>{
    popUp.style.display = 'none'
})