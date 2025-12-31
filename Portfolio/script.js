let dayNight = document.querySelector(".daynight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
    banner.classList.toggle("night");
});

// Advanced Typed.js setup
var typed = new Typed("#text", {
    strings: ["StarXBurn", "a Designer", "a Coder", "an Influencer"],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});
