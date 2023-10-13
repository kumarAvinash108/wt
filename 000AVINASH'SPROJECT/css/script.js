document.querySelector("body").addEventListener("click",function(){
    var div = document.createElement("div")
    div.classList.add("box")
    document.body.appendChild(div)
    console.log("hello")
    setTimeout(function(){div.remove()},10500)
})