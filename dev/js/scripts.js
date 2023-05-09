import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.set("#section-1 h1 span",{alpha:0.25});

//Timeline Controls
//tl.pause();
//tl.resume();
//tl.seek();
//tl.reverse();

//let trailBtn = document.querySelector("#trail-btn")

let h1Hover = document.querySelector("#hero-h1");

let heroHeaderTl = gsap.timeline({paused:true});
heroHeaderTl.to("#hero-h1",{duration:0.25, scale:2, color:"#fff"}, "myLabel")
;

//TO ADD LISTENERS:
h1Hover.addEventListener("mouseover",function(){
    heroHeaderTl.play();
})

function oneAnimation(){
    let tl = gsap.timeline();
    tl.from("h1",{duration:1,alpha:0, y:-100})
    .from("p",{duration:1,alpha:0, y:-100}, "-=0.75")
    return tl;
}

let mainTl = gsap.timeline();
mainTl.add(oneAnimation())