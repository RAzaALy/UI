for(let i = 0 ; i<= 2000; i++){
    const box = document.createElement('span')
    document.querySelector('.container').appendChild(box)
}


// work for randomly 

// const spans = document.querySelectorAll('span')

// function randomSpanSelect(){
//     return spans[Math.floor(Math.random() * spans.length)]
// }


// setInterval(()=>{
//     const span = randomSpanSelect()
//     span.classList.add('active')

//     setTimeout(() => {
//         span.classList.remove('active')
//     }, 1000);
// },50)