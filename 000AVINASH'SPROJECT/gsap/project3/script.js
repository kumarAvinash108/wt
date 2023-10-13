gsap.to(".page1 h1", {
  transform: "translateX(-150%)",
  fontWeight: 100,
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    start: "top 0",
    end: "top -200%",
    pin: true,
    scrub: 3,
  },
});
gsap.from(".page2",{
       
   
  
    scale:0,
    opacity:0,
    duration:0.5,
  
    y:40,
 
   

    scrollTrigger:{
     
        trigger:".page2",
        scroller:"body",
      
        start:"top 60%",
        scrub:2,
        end:"top 99%"
    }

     
})
