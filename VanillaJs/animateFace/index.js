document.querySelector('body').addEventListener('mousemove', eyeBall)

function eyeBall(){
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2)
        let radian = Math.atan2(event.pageX - x , event.pageY - y)
        let rot = (radian * (100 / Math.PI) * - 1) + 0;
        eye.style.transform = `rotate(${rot}deg)`
    })
}