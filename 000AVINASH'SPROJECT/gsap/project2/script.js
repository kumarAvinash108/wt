var tl = gsap.timeline()
tl.from(".nav",{
opacity:0,
duration:0.5,
delay:0.5,
})
tl.from(".nav h3, .nav i",{
    y: -100,
    duration:0.2,
    opacity:0,
    scale:0,
    stagger:0.2


})


tl.from(".left, .left h1",{
    x:-100,
    opacity:0,
    stagger:0.2,
    duration:0.5,
})



tl.from(".right img",{
    scale: 0,
    duration:0.5,
    opacity:0.5,
})

tl.from(".textCon h3",{
    opacity:0,
    duration:0.2,
    stagger:0.5
})

tl.from(".l",{
  y: -100,
    x:-100,
    opacity: 0,
    duration:0.2,
    stagger:0.5,
    
    scrollTrigger:{
        trigger:".page2 .l",
        scroller:"body",
        
        start:"top 70%",
        scrub: 1,

    }
})

tl.from(".r",{

       opacity:0,
       x:100,
         duration :0.2,
         scrollTrigger:{
             trigger : ".r",
             scroller: "body",
             scrub:1,
         }
     
})
