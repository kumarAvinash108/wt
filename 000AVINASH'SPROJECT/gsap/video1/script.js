// gsap.to(".box",{
//     x:900,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     scale:0.5
//     //scale has default value 1
   
// })
gsap.from(".box",{
    x:900,
    duration:2,
    delay:1,
    backgroundColor:"blue",
    rotate:360,
    scale:0.5
    //scale has default value 1
   
})
gsap.from("h1",{
    x: 600,
    y: 400,
    duration: 5,
    delay: 2,
    rotate: 360,
    stagger: 1,
    repeat: 1,




})

var timeLine = gsap.timeline()
timeLine.to("h2",{
x:600,
duration: 2,
delay:1,
})
timeLine.to("h3",{
    x:700,
    })