let loadTimer = setInterval(()=>{
    timer+=1
    if (timer==10) {
        clearInterval(loadTimer)
        document.getElementById('container').style.display = "flex"
        document.getElementById('load').style.display = "none"
        
        window.location = "game.html"
    }
}, 300)