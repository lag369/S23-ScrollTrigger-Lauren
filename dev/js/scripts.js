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

let infoHover = document.querySelector("#info-h1");

let infoHeaderTl = gsap.timeline({paused:true});
infoHeaderTl.to("#info-h1",{duration:0.25, scale:2, color:"#fff"})
;

infoHover.addEventListener("mouseover",function(){
    infoHeaderTl.play();
})

//scrollTrigger
//ScrollTrigger:{
    //trigger: "#myId",
    //scrub:true,
    //markers:true
    //start: "center 70%", "(trigger element) (scroller/viewport)"
    //end: "center 10%",
//}
//pin:"#box" or true

function oneAnimation(){
    let tl = gsap.timeline();
    tl.from("h1",{duration:1,alpha:0, y:-100})
    .from("p",{duration:1,alpha:0, y:-100}, "-=0.75")
    return tl;
}

function body1Animation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#body",
            start: "top 10%",
            end: "bottom 70%",
            scrub:true,
            markers:false
    }});
    tl.to("#body", {duration:0.25, rotation:180}, "-=0.15")
    ;

    return tl;
}

function boxAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#box",
            toggleActions:"play reverse none",
            start: "top center",
            end: "bottom 10%",
            scrub:true,
            markers:false
    }});
    tl.from("#box",{duration:2, scale:3, rotation:270, x:"-=300%"})
    ;

    return tl;
}

function infoAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#info-h1",
            start: "top 50%",
            end: "bottom 80%",
            scrub:true,
            markers:false
    }});
    tl.from("#info-p",{duration:1, scale:3, rotation:180, x:"-=300%"}, "#info")
    ;

    return tl;
}

let mainTl = gsap.timeline();
mainTl.add(oneAnimation())
mainTl.add(boxAnimation())
mainTl.add(infoAnimation())
mainTl.add(body1Animation())