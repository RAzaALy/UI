const char = document.querySelector('.char')
const word = document.querySelector('.word')
const textarea = document.querySelector("textarea")

function counter(text){
    char.innerHTML =  text.length;
    word.innerHTML = text.split(' ').length

}

textarea.addEventListener('input', (e) => counter(e.target.value.trim()))