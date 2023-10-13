var tl = gsap.timeline();

tl.from("#nav img, #nav h3, #nav button", {
  y: -100,
  duration: 1.5,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});
tl.from("h1", {
  y: 100,
  duration: 1.5,
  opacity: 0,
  stagger: 0.3,
});
tl.from(".left, .right", {
  opacity: 0,
  scale: 0,
  duration: 2,
  stagger: 0.2,
});
tl.from("h5", {
  y: 20,
  repeat: -1,
  opacity: 0,
  duration: 0.6,
  yoyo: true,
});
