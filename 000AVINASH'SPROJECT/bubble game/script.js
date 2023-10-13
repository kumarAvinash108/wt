
var timer = 60
var score = 0
var ran = 0
function mkBubble()
{
    var clutter = ""
 
for(var c = 1; c<=80; c++){
    var val = Math.floor(Math.random() * 10)
    clutter+=`<div class="bubble" id="${c}">
    <h2>${val}</h2>
</div>`
}
document.querySelector(".bottom").innerHTML = clutter
}

function runTimmer(){

        var u =  setInterval(function(){
            timer--
            if(timer >= 0){
                document.querySelector("#timerClass").textContent = `${timer}`
            }
            else{
            clearInterval(u)
            document.querySelector(".bottom").innerHTML = `<div><h2>Game Over !</h2> </div> 
            <div><h2>Your Score is ${score} </h2> </div>`
            }
            
            
        },1000)
}

function newHit(){
ran = Math.floor(Math.random()*10)
document.querySelector("#rm").textContent = `${ran}`
}
function scoreIncrease(){
score+=10
document.querySelector("#sc").textContent = score
}

document.querySelector(".bottom").addEventListener("click",function(dets){
    var ck = Number(dets.target.textContent)
    if(ck===ran){
        scoreIncrease()
        mkBubble()
        newHit()
    }
    else{
        var strg = `<div><h2>Game Over !</h2> </div> 
        <div><h2>Your Score is ${score} </h2> </div>`
        document.querySelector(".bottom").innerHTML = strg
        timer = 0
        document.querySelector("#timerClass").textContent = `${timer}`
    }
})
mkBubble()
runTimmer()
newHit()

