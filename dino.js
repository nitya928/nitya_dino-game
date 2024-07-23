score=0;
cross=true;

document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        girl = document.querySelector('.girl');
        girl.classList.add('animategirl');
        setTimeout(() => {
            girl.classList.remove('animategirl')
        }, 700);
    }
        if (e.keyCode == 39) {
            girl = document.querySelector('.girl');
            girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
            girl.style.left = (girlX + 112) + "px";

        }
        if (e.keyCode == 37) {
            girl = document.querySelector('.girl');
            girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
            girl.style.left = (girlX - 112) + "px";
        }
}
    setInterval(() => {
        girl = document.querySelector('.girl');
        gameOver = document.querySelector('.gameOver');
        dino = document.querySelector('.dino');

        gx = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
        gy = parseInt(window.getComputedStyle(girl, null).getPropertyValue('bottom'));

        dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
        offsetX = Math.abs(gx - dx);
        offsetY = Math.abs(gy - dy);
        console.log(offsetX, offsetY)
        if (offsetX < 20 && offsetY < 52) {
            gameOver.style.visibility = 'visible';
            dino.classList.remove('animatedino');
        }
        else if( offsetX<100 && cross){
            score+=1;
            update_score(score);
            cross=false;
        
        setTimeout(()=>{
            cross=true;
        },1000);
    }

    },100);


    function update_score(score){
        scoreCount.innerHTML="Your Score: " +score;
    }

