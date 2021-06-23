document.addEventListener('mousemove',(e)=>{
    let body = document.querySelector('body')
    let heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px'
    heart.style.top = y + 'px'
    let size = Math.random() * 300;

    heart.style.width = 20+size+ 'px'
    heart.style.height = 20+size+ 'px'

    body.appendChild(heart)

    setTimeout(() => {
        heart.remove()
    }, 2000);
})