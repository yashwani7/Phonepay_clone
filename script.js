var swiper = new Swiper(".mySwiper", {
  autoplay:{
    delay:3500,
  },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  gsap.registerPlugin(ScrollTrigger);

gsap.to(".page5_down img",{
  x:100,
  duration:4,
  scrollTrigger: ".page5_down img"
})

// menu 
// let menu=document.querySelector('.menu');
// let close=document.querySelector('.close');
// let menulist=document.querySelector('.menu-list');



// menu.addEventListener('click' ,function(){
//   menulist.style.display="inital";
// })



// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// function show(){
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".container"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);
  
//   // tell ScrollTrigger to use these proxy methods for the ".container" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy(".container", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
//   });
  
  
  
  
//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
// }
// show();


