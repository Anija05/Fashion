const backgrounds = document.querySelectorAll(".hero-bg");
let current = 0;
function changeBackground() {
    backgrounds[current].style.opacity = "0";
    backgrounds[current].style.transform = "scale(1.04)";
    current++;
    if (current >= backgrounds.length) {
        current = 0;
    }
    backgrounds[current].style.opacity = "1"
    backgrounds[current].style.transform = "scale(1)"
}
setInterval(changeBackground, 4000)

const tables=document.querySelectorAll(".table")
const observer=new IntersectionObserver((items)=>{
    items.forEach((item)=>{
        if(item.isIntersecting){
            item.target.classList.add("show")
        }
    })
},{
    threshold:0.2
})
tables.forEach((entry)=>{
    observer.observe(entry)
})

const tablecont=document.querySelectorAll('.tablecontent')
const observertable=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
},{
    threshold:0.2
})
tablecont.forEach((entry)=>{
    observertable.observe(entry)
})

const card=document.querySelectorAll(".card")
const observercard=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
},{
    threshold:0.2
})
card.forEach((item)=>{
    observercard.observe(item)
})

const after=document.querySelectorAll(".after")
const observerafter=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
},{
    threshold:0.2
})
after.forEach((item)=>{
    observerafter.observe(item)
})

const video=document.querySelectorAll('.videocontent')
const observervideo=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
},{
    threshold:0.2
})
video.forEach((item)=>{
    observervideo.observe(item)
})
const cont=document.querySelectorAll('.contact')
const observercont=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
},{
    threshold:0.2
})
cont.forEach((item)=>{
    observercont.observe(item)
})

const menu = document.getElementById("menu");
const navlinks = document.querySelector(".navlinks");

menu.addEventListener("click", function () {
    navlinks.classList.toggle("active");
});

document.querySelectorAll(".navlinks a").forEach(link => {
    link.addEventListener("click", function () {
        navlinks.classList.remove("active");
    });
});