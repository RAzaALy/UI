const bg = document.getElementById('bg')

function randomColor(){
    return Math.floor(Math.random() * 255)
}



const setColor = () => {
    
    bg.style.background = `linear-gradient(to top right , rgba(${+ randomColor()}, ${randomColor()}, ${randomColor()}, .5) 0% , rgba(${+ randomColor()}, ${randomColor()}, ${randomColor()}, .5) 100%)`
}

setColor()

bg.addEventListener('click',setColor)