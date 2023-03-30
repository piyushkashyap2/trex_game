const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var counter=0;

function start()
{
    function jump() {
        if (dino.classList != "jump"){
        dino.classList.add("jump");
    
        setTimeout(function (){
            dino.classList.remove("jump");
        }, 300);
       }
    }
    
    let alive = setInterval(function(){
        // get current dino Y position
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
        // get current cactus X position
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        console.log(cactusLeft);
    
        // detect collision
        if (cactusLeft <50 && cactusLeft >0 && dinoTop >=140){
            // collision
           alert("game over, score: "+ Math.floor(counter/100));
           counter=0;
        }
        else{
            counter++;
            document.getElementById("scorespan").innerHTML = Math.floor(counter/100);
        }
    
    
    }, 10);
    
    document.addEventListener("keydown", function (Event){
        jump();
    });
}