const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const clouds = document.querySelector(".clouds")
function jump(e) {
    if(e.keyCode == 32) {
        mario.classList.add("jump")
        setTimeout(() => {
            mario.classList.remove("jump")
        }, 500)
    }
    
}

function dead(){
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') 
    const cloudsPosition = clouds.offsetLeft

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Cano
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`


        // Mario
        mario.style.animation = "none"
        mario.style.bottom = `${marioPosition}px`
        mario.src = "./img/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft = "50px"

        // Nuvens
        clouds.style.animation = "none"
        clouds.style.left = `${cloudsPosition}px`


        clearInterval(loop)
    }
}

const loop = setInterval(dead, 10)
document.addEventListener("keydown", jump) 


