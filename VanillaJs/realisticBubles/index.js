function createBubbles(){
    const section = document.querySelector('section')
    const createElement = document.createElement('span')
    let size = Math.random() * 60;
    createElement.style.width = 20 + size + 'px'
    createElement.style.height =20 + size + 'px'
    createElement.style.left = Math.random() * window.innerWidth + 'px'
    section.appendChild(createElement)

    setTimeout(() => {
        createElement.remove()
    }, 3000);
}


setInterval(createBubbles,50)