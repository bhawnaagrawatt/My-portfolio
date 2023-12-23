gsap.registerPlugin(ScrollTrigger);

//---------home-----------

gsap.fromTo(".menu .menu-items",{
    y:-5 ,
    opacity:0,
},
{
    y:0,
    opacity:1,
    duration:1,
    stagger:{from:"center",amount:0.3,ease:"power2.inOut"},
},

)
gsap.fromTo(".mail-git-dark-box",{
    x:200,
    opacity:0,
    scale:0.5,
},
{
    x:0,
    scale:1,
    opacity:1,
    ease:"power1",
    duration:0.7,
},{
}                                                       
)
gsap.fromTo(".hamburger",{
    x:200,
    opacity:0,
    scale:0.5,
},
{
    x:0,
    scale:1,
    opacity:1,
    duration:0.8,
    ease:"bounce.out",
},                                                      
)
gsap.fromTo(".content-left .left",{
    x:-300,
    opacity:0,
},
{
    x:0,
    opacity:1,
    duration:0.7,
    ease:"power1"
},
)
const t1 = gsap.timeline({
    defaults:{duration:1,ease:"power1"}
})
t1.from(".my-image-left",{x:300,opacity:0,duration:0.4})
  .from(".my-image",{y:300,opacity:0,duration:0.2})
  .fromTo(".code-icons",{scale:0.1,opacity:0},{scale:1,opacity:1 ,duration:0.4 ,stagger:0.1})
  
  gsap.from(".social-icons-right .social_icons",{
    y:100,
    duration:0.4,
    stagger:0.1,
    opacity:0
})
gsap.from(".social-icons-right ",{
    y:100,
    duration:0.5,
    stagger:0.1,
    opacity:0
})
//--------------end of home

//---------------about mee

const t2 =gsap.timeline({
    defaults:{duration:1 ,ease:"circ",}
})

t2.from(".about-me-content-left .content" ,{opacity:0,x:-200,duration:0.3})
t2.from(".about-me-content-left .hello" ,{opacity:0,y:200,duration:0.2});


const t3 =gsap.timeline({
    defaults:{duration:0 ,ease:"power3.inout",}
})
t3.reverse()
t3.fromTo(".about-1" ,{opacity:0,x:300},{opacity:1,x:0,duration:0.2,    stagger:{from:"start",amount:0.3,ease:"power2"}})
t3.fromTo(".about-2" ,{opacity:0,x:-300},{opacity:1,x:0,duration:0.2,    stagger:{from:"start",amount:0.3,ease:"power2"}})
t3.fromTo(".about-3" ,{opacity:0,x:300},{opacity:1,x:0,duration:0.2,    stagger:{from:"start",amount:0.3,ease:"power2"}})
t3.fromTo(".about-me-text" ,{opacity:0,x:300},{opacity:1,x:0,duration:0.2,    stagger:{from:"start",amount:0.3,ease:"power2"}})



ScrollTrigger.create({   
    trigger: ".about-me-content-left ",
    animation: t2,
    toggleActions:"restart reverse restart reverse",
    start: "top: 70%",
    end:"bottom 15%",
});
ScrollTrigger.create({
    trigger: ".about-me-content-right ",
    animation: t3,
    duration:0.1,
    toggleActions:"restart reverse restart reverse",
    start: "top: 70%",
    end:"bottom 30%",
});



//--------------end of about me

//-----------------my skils

const t4=gsap.timeline({
    defaults:{duration:0.1 ,ease:"sine",}
})
t4.from(".card-1" ,{opacity:0,x:-500,stagger:false})
t4.from(".card-2" ,{opacity:0,x:-520,stagger:{from:"start",amount:0.7}})
t4.from(".card-3" ,{opacity:0,x:-550,stagger:{from:"start",amount:0.7}})

ScrollTrigger.create({
    trigger: ".card-1",
    animation: t4,
    start: "top: 85%",
    ease:"sine",
    toggleActions:"restart reverse restart reverse",
    end:"bottom -20%",
});
const t5=gsap.timeline({
    defaults:{duration:0.4 ,ease:"power1",}
})
t5.from(".my-skills-future" ,{opacity:0,x:500,stagger:false,duration:0.3})
t5.from(".ellipse .circular" ,{opacity:0,stagger:{from:"start",amount:0.5}})
t5.from(".my-skills-text-2" ,{opacity:0,x:100,stagger:false,duration:0.2})
t5.from(".my-skills-text" ,{opacity:0,x:100,stagger:false,duration:0.2})
ScrollTrigger.create({
    trigger: ".my-skills-future",
    animation: t5,
    start: "top: 85%",
    ease:"sine",
    toggleActions:"restart reverse restart reverse",
    end:"bottom -60%",
});

//--------------end of my skills

//---------------projects

const t6=gsap.timeline({
    defaults:{duration:0.3 ,ease:"sine",}
})
t6.from(".projects-top .top-animate" ,{opacity:0,y:100,stagger:false})
t6.from(".projects-top .second-animate" ,{opacity:0,x:-300,stagger:{from:"start",amount:0.7}})
ScrollTrigger.create({
    trigger: ".projects-top",
    animation: t6,
    start: "top: 75%",
    ease:"sine",
    toggleActions:"restart reverse restart reverse",
    end:"bottom 15%",
});
const t7=gsap.timeline({
    defaults:{duration:0.3 ,ease:"sine",}
})
t7.from(".projects-bottom .top-animate" ,{opacity:0,y:100,stagger:false})
t7.from(".projects-bottom .second-animate" ,{opacity:0,x:300,stagger:{from:"start",amount:0.7}})
t7.from(".projects-text" ,{opacity:0,x:300,stagger:{from:"start",amount:0.7}})
ScrollTrigger.create({
    trigger: ".projects-bottom",
    animation: t7,
    start: "top: 70%",
    ease:"sine",
    toggleActions:"restart reverse restart reverse",
    end:"bottom 12%",
});

//--------------end of project

//--------------get in touch


const t8=gsap.timeline({
    defaults:{duration:0.3 ,ease:"sine",}
})
t8.from(".get-in-touch-inner .content" ,{opacity:0,y:100,stagger:false})
t8.from(".social-icons .icons" ,{opacity:0,x:100,duration:0.2,stagger:{from:"start",amount:0.2}})
t8.from(".designed-by-sk" ,{opacity:0,y:10,duration:0.2,stagger:false})
t8.from(".get-in-touch-text" ,{opacity:0,x:100,duration:0.2,stagger:false})
ScrollTrigger.create({
    trigger: ".designed-by-sk",
    animation: t8,
    start: "top: 90%",
    ease:"sine",
    toggleActions:"restart reverse ",
    end:"bottom 0%",
});