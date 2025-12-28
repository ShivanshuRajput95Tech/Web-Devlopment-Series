let dayNight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");

})
let typingEffect = new Typed("text",{
    string:["StarXBurn","Designer","Youtuber","Influencer","Coder"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})