const toggle = document.getElementById('toggle')
const slideBar = document.getElementById('slideBar')
toggle.addEventListener('click',(e)=>{
    toggle.classList.toggle('active');
})

window.addEventListener('click',(e)=>{
    if(e.target.id !== 'slideBar' && e.target.id !== 'toggle'){

        toggle.classList.remove('active')
    }

})