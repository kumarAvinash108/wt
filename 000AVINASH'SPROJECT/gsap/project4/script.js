var circle = document.querySelector("#circle")
window.addEventListener("mousemove",function(dets){

    gsap.to("#circle",{
        x: dets.clientX,
        y: dets.clientY,
        duration:0.3,

    })
})

var frame = document.querySelector(".frame")

frame.addEventListener("mouseenter",function(){
    gsap.to("#circle",{
        scale: 8,
    })
    gsap.to("span",{
        y: -5+"vw"
    })
})

frame.addEventListener("mouseleave",function(){

    gsap.to("#circle",{
        scale: 1,
        duration:0.3,
    })
    gsap.to("span",{
        y: 0
    })
})