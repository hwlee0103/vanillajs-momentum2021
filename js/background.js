const images = ["maldives.jpeg", "mountains.jpeg", "sea.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "background-image";
document.body.appendChild(bgImage);
