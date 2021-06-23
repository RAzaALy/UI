const container = document.getElementById('container')



for(let i = 0 ; i<=40; i++){
    let goeyBox = document.createElement("div")
    goeyBox.className = 'box'
    container.appendChild(goeyBox)
}


setInterval(()=>{

    let gooye  = document.querySelectorAll('.box')
    gooye.forEach((go, idx)=>{
        go.style.left = Math.floor(Math.random() * 80) + 'vw';
        go.style.top = Math.floor(Math.random() * 70) + 'vw';
    })

}, 2000)