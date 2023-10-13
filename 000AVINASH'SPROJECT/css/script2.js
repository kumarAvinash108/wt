
var count = 0
document.querySelector("span").addEventListener("click",function(){
  
    if(count == 0){
        document.querySelector("span").style.top = "478px"
        document.querySelector("span").style.rotate = "270deg"
        count = 1;
    }
    else{
        document.querySelector("span").style.top = "0"
        document.querySelector("span").style.rotate = "360deg"
        count = 0;

    }
    

})