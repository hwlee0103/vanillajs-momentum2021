const images = ["maldives.jpeg", "mountains.jpeg", "sea.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//console.log(chosenImage);

const bgImage = document.createElement("img");

//console.log(bgImage);

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

//console.log(document.body);
