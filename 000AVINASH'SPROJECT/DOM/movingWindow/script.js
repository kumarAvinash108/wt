parent = document.querySelector(".parent")
box =  document.querySelector(".box")
parent.addEventListener("mousemove",function(dets){
    if(dets.x <= 500 || dets.x>=800){
        box.style.transition = "all ease 0.9s"
    }
    box.style.left = dets.x + "px"
    box.style.transition = "all ease 0.9s"
    console.log(dets.x)
})