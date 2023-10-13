var con = document.querySelector(".container")
var love = document.querySelector(".ri-heart-fill")
var loveDown = document.querySelector(".ri-heart-3-fill")
var flag = 0
con.addEventListener("dblclick",function(){
   if(flag == 0)
   {
    love.style.transform = "translate(-50%,-50%) scale(1)"
    love.style.opacity = "0.8"
    setTimeout(function(){
      love.style.opacity = "0"
    },1000)
    setTimeout(function(){
        love.style.transform = "translate(-50%,-50%) scale(0)"
    },2000)
    loveDown.style.color = "red"
    flag = 1
   }
   else{
    loveDown.style.color = "#fff"
    flag = 0
   }
})