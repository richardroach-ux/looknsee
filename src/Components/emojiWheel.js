let angle = 54.1;
let centerX = 200;
let centerY = 200;
let radius = 150;
let speed = 0.01;
let imageArray;
function preload() {
    imageArray = [
    loadImage("https://drive.google.com/uc?export=view&id=1w07dPwvKGjxXfS1hVS8W_3Qu-Id4WJtk"),
    loadImage("https://drive.google.com/uc?export=view&id=1vdkhzR7GFlvkMfBuDBqArXfKY6TGHqJF"),
    loadImage("https://drive.google.com/uc?export=view&id=1tpGGANLdiwguXRP2BDOPaYL42w3sO9Oi"),
    loadImage("https://drive.google.com/uc?export=view&id=1mBRmXdpw2AjqkrcWhW1Gjeu08dnTquQx"),
    loadImage("https://drive.google.com/uc?export=view&id=1lUF5P5i3jxUbqmGIv3aqCW8KJbxmMEjI"),
    loadImage("https://drive.google.com/uc?export=view&id=1YLKbZslkeFo3AyfI4cThrpneN-b7fxA9"),
    loadImage("https://drive.google.com/uc?export=view&id=1KPS0-h2J-nWYXhYEZ69UxjXeaqO6e-YN")
    ]
}
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(220);
    for (let i = 0; i < imageArray.length; i++) {
        let x = centerX + radius * cos(angle * i);
	    let y = centerY + radius * sin(angle * i);
        image(imageArray[i], x, y, 50, 50)
    }
    angle = angle + speed;
}