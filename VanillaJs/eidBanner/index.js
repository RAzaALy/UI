function bubbles(){
    let count = 200;
    const section = document.querySelector('section')
    for(let i = 0;i<=count;i++){
        let bubbles = document.createElement('i')
        let x = Math.floor(Math.random() * window.innerWidth)
        let y = Math.floor(Math.random() * window.innerHeight)
        
        let size = Math.random() * 10;
        bubbles.style.left = x + 'px'; 
        bubbles.style.top = y + "px";
        bubbles.style.width = 1 + size + 'px';
        bubbles.style.height = 1 + size + 'px';
        bubbles.style.animationDuration = 5+size +'s';
        bubbles.style.animationDelay = -size + 's';
        section.appendChild(bubbles)
    }
}

bubbles()