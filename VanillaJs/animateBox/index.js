const colors = [
    "#e74c3c",
    "#8e44ad",
    "#3498db",
    "#e67e22",
    "#2ecc71",
    "#FF6F61",
    "#9B1B30",
    "#77212E",
    "#F5D6C6",
    "#FA9A85",
    "#5A3E36",
    "#CE5B78",
    "#E08119",
    "#2A4B7C",
    "#577284",
    "#264E36",
    "#2A293E",
    "#9F9C99",
    "#797B3A",
    "#9E1030",
    "#FE840E",
    "#FF6F61",
    "#C62168",
    "#FFD662",
    "#8D9440",
    "#00539C",
    "#755139",
    "#D69C2F",
    "#E8B5CE",
    "#343148",
  ];

const clas = ['acitve1','active2','active3','active4','active5']
  
function createBox(){
    const section = document.querySelector('section')
    const box = document.createElement('span')
    box.classList.add(clas[Math.floor(Math.random() * clas.length)])
    const size = Math.random() * 60 + 20 + 'px';


    box.style.left = Math.random() * window.innerWidth + "px";
    box.style.top = Math.random() * window.innerHeight + "px";
    box.style.width = size;
    box.style.height = size;
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

    section.appendChild(box)


    setTimeout(() => {
        box.remove()
    },3000);
}


setInterval(createBox,50);


// function createBox(){
//     const section = document.querySelector('section')

//     for (let i = 0;i<=200;i++){

//         const box = document.createElement('span')
//         const size = Math.random() * 60 + 20 + 'px';
//         box.style.left = Math.random() * window.innerWidth + "px";
//         box.style.top = Math.random() * window.innerHeight + "px";
//         box.style.width = size;
//         box.style.height = size;
//         box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        
//         section.appendChild(box)
//     }
        
// }


// createBox()