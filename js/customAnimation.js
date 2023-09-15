const element = document.getElementById("animationViber");
const animate = new mdb.Animate(element, {
  animation: "pulse",
  animationStart: "onScroll",
  animationDelay: "0",
  animationDuration: "500",
  animationReverse: "false",
  animationRepeat: "true",
  animationInterval: "0",
});
animate.init();
