const marker = document.querySelector('#marker')
const item = document.querySelectorAll('nav a')
function indicator(e){

    // console.log(e.offsetLeft)
    // console.log(e.offsetWidth)
    
    marker.style.left = e.offsetLeft+ 'px'
    marker.style.width = e.offsetWidth+ 'px'
}


item.forEach(link =>{
    link.addEventListener('mouseover',(e)=>{
        indicator(e.target)

    })
})