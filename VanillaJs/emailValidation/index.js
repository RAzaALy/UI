
const email = document.getElementById('email')

email.addEventListener('input',(e)=>{
    validate(e.target.value)
})



function validate(email){
    const form = document.getElementById('form')

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if(email.match(pattern)){
        form.classList.remove('invalid')
        form.classList.add("valid")
    }else{
        form.classList.remove('valid')
        form.classList.add('invalid')
    }if(email === ''){
        form.classList.remove('invalid')
    }
}