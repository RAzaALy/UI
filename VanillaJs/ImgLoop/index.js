const banner = document.querySelector('.banner');

const blocks = document.getElementsByClassName('blocks');



for(let i = 0;i<400;i++){
    banner.innerHTML +=   `
    <div class="blocks"></div>
    `

    blocks[i].style.animationDelay = `${i * .03}s`
}