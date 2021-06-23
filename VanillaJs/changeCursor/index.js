const cursor = document.querySelector('.cursor')
// document
window.addEventListener('mousemove',(e)=>{
    // we can use clientX ,Y and use pageX , Y
    cursor.style.left = e.pageX  + 'px'
    cursor.style.top = e.pageY  + 'px'
})