gsap.from(".page1 .box", {
    y:-100,
    duration:1,
    delay:1,
    rotate:360,
    opacity:0,
    scale:0

    
})
gsap.from(".page2 .box", {
    y:-100,
    duration:1,

    rotate:360,
    opacity:0,
    scale:0,
scrollTrigger:{
    trigger:".page2 .box",
    scoller:"body",
    markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub: 2
}
    
})