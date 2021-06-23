document.body.addEventListener('mousemove' , (e)=>{
    gsap.to('.circle', {
        x : e.clientX,
        y : e.clientY,
        stagger : -0.05,
    })
})

const cursor = document.querySelector('.cursor');

for(let i = 0; i<=50; i++){
    const circle = document.createElement('div')
    circle.classList.add('circle');

    cursor.appendChild(circle)

}