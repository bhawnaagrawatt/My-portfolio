const hamburger=document.querySelector(".hamburger");
const bars=document.querySelectorAll(".bars");
const menu=document.querySelector(".menu");
const menu_links=document.querySelectorAll(".menu-items");
const menu_anchor=document.querySelectorAll(".menu-items a");
hamburger.addEventListener('click', ()=>{
    bars.forEach((bars) =>{
        bars.classList.toggle('active')
    })
    menu.classList.toggle('menu-2');
    menu_links.forEach((menu_links) =>{
        menu_links.classList.toggle("link-effect")
    })
})
// menu_anchor.addEventListener('click', () =>{
//     // console.log("dhjkh")
//     // menu_links.forEach((menu_links) =>{
//     //     menu_links.classList.remove("link-effect")
//     // })
//     hamburger.classList.remove('active');
// })
menu_anchor.forEach((menu_anchor) =>{
    menu_anchor.addEventListener('click', ()=>{
        menu_links.forEach((menu_links)=>{
            menu_links.classList.remove('link-effect')
        })
        menu.classList.remove('menu-2')
        bars.forEach((bars) =>{
            bars.classList.remove('active')
        })
    })
})

//end of nav bar 