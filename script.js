gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



function cursorEffect(){
    console.log("Thank's for inspecting .... love from Gyana ❤️");


var page1Content = document.querySelector("#page1-cont");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove",function(cordinate){
    gsap.to("#cursor",{
        x:cordinate.x-800,
        y:cordinate.y
    })
})

page1Content.addEventListener("mouseenter",()=>{
    gsap.to("#cursor",{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave",()=>{
    gsap.to("#cursor",{
        scale:0,
        opacity:0        
    })
})
}
cursorEffect();

function page2Animation(){

}
page2Animation();
