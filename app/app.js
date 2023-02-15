const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX < 449 && positionY == 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX == 449 && positionY < 449) {
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionY == 449 && positionX > 0) {
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else {
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
    move()

//////////////////////////////////////////////////////////////////////


const num = document.querySelector('.number')
const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

num.innerHtml = 0
let timer
start.addEventListener('click', function () {
    timer = setInterval(function () {
        num.innerHTML++
    }, 1000)
});
stop.addEventListener('click', function () {
    clearInterval(timer)
});