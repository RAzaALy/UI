function stars(){
    const count = 200;
    const section = document.querySelector('section')
    for(let i = 0 ; i<=200;i++){
        const star = document.createElement('i')
        const x = Math.floor(Math.random() * window.innerWidth)
        const y = Math.floor(Math.random() * window.innerHeight)

        const size = Math.random() * 4;

        const duration = Math.random() * 2;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';
        star.style.animationDuration = 2 + duration + 's';
        star.style.animationDelay = duration + 's';

        section.appendChild(star)
    }
}

stars()