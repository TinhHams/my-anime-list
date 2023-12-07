const typeA = document.querySelector(".typeA");
const typeB = document.querySelector(".typeB");
const moreInfoA = document.querySelector(".more-infoA");
const moreInfoB = document.querySelector(".more-infoB");
const trailerVid = document.querySelector(".trailer");
const container = document.querySelector(".container");

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

// On/Off Hero Container

function displayOff() {
    container.style.opacity = 0;
}

function displayOn() {
    container.style.opacity = 0.8;
}

// Load Video Trailer

trailerVid.addEventListener("mouseenter", function() {
    trailerVid.play();
    displayOff();
})

trailerVid.addEventListener("mouseleave", function() {
    trailerVid.pause();
    displayOn();
})

