function createRandomColor() {
    let colorCode = "#";
    for (let i = 1; i <= 6; i++) {
      const components = [
        "a",
        "1",
        "b",
        "3",
        "2",
        "c",
        "8",
        "9",
        "d",
        "4",
        "e",
        "5",
        "f",
        "6",
        "7",
      ];
      colorCode += components[Math.floor(Math.random() * components.length)];
    }
    return colorCode;
  }


const navigation = document.querySelector('.navigation')
const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', (e)=>{
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
    const spans = document.querySelectorAll('span')
    const color = createRandomColor()
    spans.forEach(span =>{
        span.style.backgroundColor = color;
    })
    
})

