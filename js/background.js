const images = [
    "blacksky.jpg",
    "star.jpg",
    "starry-night.jpg"
]
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;
document.querySelector("body").style.backgroundImage = bgImg;
document.body.appendChild(bgImg);