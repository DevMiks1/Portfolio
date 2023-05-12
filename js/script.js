// hero section


// ScrollReveal({ reset: false, distance: "60px", duration: 2500, delay:500});
// ScrollReveal().reveal('.profile-name', { delay: 500, origin: "left" });
// ScrollReveal().reveal('.social', { delay: 600, origin: "bottom" });
// ScrollReveal().reveal('.right-hero-section', { delay: 700, origin: "right"});
// // know me section
// ScrollReveal().reveal('.know-me-image', { delay: 500, origin: "left"});
// ScrollReveal().reveal('.know-me-description', { delay: 600, origin: "right"});
// ScrollReveal().reveal('.scroll-btn', { delay: 700, origin: "bottom"});

// // blogs section
// ScrollReveal().reveal('.blogs-image', { delay: 400, origin: "right"});
// ScrollReveal().reveal('.blogs-description', { delay: 500, origin: "left"});
// ScrollReveal().reveal('.scroll-btn1', { delay: 550, origin: "bottom"});

// // services section
// ScrollReveal().reveal('.title-services', { delay: 550, origin: "bottom"});
// ScrollReveal().reveal('.card', { delay: 600, origin: "bottom"});

const testimonialBody1 = document.querySelector(".testimonial-body1") // card 1 
const testimonialBody2 = document.querySelector(".testimonial-body2") // card 2
const testimonialBody3 = document.querySelector(".testimonial-body3") // card 3
const icon1 = document.querySelector("#icon1") // close button for card 1
const icon2 = document.querySelector("#icon2") // close button for card 2
const icon3 = document.querySelector("#icon3") // close button for card 2
const cardContent1 = document.querySelector(".card-content1") 
const cardContent2 = document.querySelector(".card-content2")
const cardContent3 = document.querySelector(".card-content3")


// function for card 1
cardContent1.addEventListener("mouseover", (e)=>{
    if(e.target.nodeName === "A"){
        testimonialBody1.style.top = "0"
    } 
})
icon1.addEventListener("click",(e)=>{
    testimonialBody1.style.top = "-100%"
})

// function for card 2
cardContent2.addEventListener("mouseover", (e)=>{
    if(e.target.nodeName === "A"){
        testimonialBody2.style.top = "0"
    } 
})
icon2.addEventListener("click",(e)=>{
    testimonialBody2.style.top = "-100%"
})

// function for card 3
cardContent3.addEventListener("mouseover", (e)=>{
    if(e.target.nodeName === "A"){
        testimonialBody3.style.top = "0"
    } 
})
icon3.addEventListener("click",(e)=>{
    testimonialBody3.style.top = "-100%"
})