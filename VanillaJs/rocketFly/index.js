window.addEventListener('mousemove' ,(e)=>{
    const rocket = document.querySelector('.rocket')
    rocket.style.left = e.pageX + 'px'
    rocket.style.top = e.pageY + 'px'
    
})
const stars =  () => {

    let count = 15;
    let scene = document.querySelector('.scene')
    for (let i =0 ; i<=count ; i++){
        let star = document.createElement('i')
        let x = Math.floor(Math.random() * window.innerWidth);

        let duration = Math.random() * 5;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px';
        star.style.animationDuration = duration + 's';

        scene.appendChild(star)
    }
}

stars()