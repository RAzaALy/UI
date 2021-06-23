document.addEventListener('mousemove', (e)=>{
  const glass = document.querySelector('.glass');
    glass.style.left = e.pageX + 'px';
    glass.style.top = e.pageY + 'px';
})