const typeA = document.querySelector(".typeA");
const typeB = document.querySelector(".typeB");
const moreInfoA = document.querySelector(".more-infoA");
const moreInfoB = document.querySelector(".more-infoB");
const trailerVid1 = document.querySelector(".trailer1");
const trailerVid2 = document.querySelector(".trailer2");
const trailerVid3 = document.querySelector(".trailer3");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");

typeA.addEventListener("mouseenter", function() {
    moreInfoA.style.display = "flex";
})

typeA.addEventListener("mouseleave", function() {
    moreInfoA.style.display = "none";
})

typeB.addEventListener("mouseenter", function() {
    moreInfoB.style.display = "grid";
})

typeB.addEventListener("mouseleave", function() {
    moreInfoB.style.display = "none";
})


// ANIME LIST

const animeList = [
    {
        id: 1,
        name: "Baka to Test",
        type: "TV/series",
        tag: ["comedy", "school", "action"],
        rate: "Highly recommend"
        // pic:
    },
    {
        id: 2,
        name: "Chununibyou",
        type: ["TV/series", "Movie/OVA"],
        tag: ["comedy", "school", "romance"],
        rate: "Must watch"
    },
    {
        id: 3,
        name: "Clannad",
        type: ["TV/series", "Movie/OVA"],
        tag: ["slice of life", "school", "romance", "drama"],
        rate: "Highly recommend"
    },
    {
        id: 4,
        name: "Sousou no Frieren",
        type: ["TV/series"],
        tag: ["slice of life", "adventure", "drama"],
        rate: "Masterpiece",
        trailer: "./trailer/Frieren.mp4"
    }  
];

const containers = [container1, container2, container3];
const trailerVids = [trailerVid1, trailerVid2, trailerVid3];

// On/Off Hero Container

function displayOff() {
    containers.forEach(function(container){
        container.style.opacity = 0; 
    })
}

function displayOn() {
    containers.forEach(function(container){
        container.style.opacity = 0.8; 
    })}

// Slide Show
let slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    trailerVid.pause()
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("my-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    // ON/OFF HERO CONTAINER ONPAUSE/ONPLAYING 
    
    trailerVids.forEach(function(trailerVid) {

        trailerVid.onpause = function() {
            displayOn();
        }
        trailerVid.onplaying = function() {
            displayOff();
        }

        // Load Video Trailer

        trailerVid.addEventListener("onclick", function() {
            trailerVid.play();
            displayOff();
        });  

        trailerVid.addEventListener("onclick", function() {
            trailerVid.pause();
            displayOn();
        });

    })
}