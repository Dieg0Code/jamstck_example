// almacén de buenas vibras

const vibes = [
    "...tu puedes!!",
    "...confío en ti!!",
    "...con fe nomas!!",
    "...sin miedo al éxito!!",
];

// choose a random vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector(".vibe").append(vibe);