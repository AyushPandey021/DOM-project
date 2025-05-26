// // click to image ✔️
let button = document.querySelector("#btn2");
let body = document.querySelector("body");

let imageCount = 0;

button.addEventListener("click", function () {
  let img = document.createElement("img");
  img.setAttribute("src", "raju.png");
  img.style.height = "300px";
  img.style.position = "absolute";

  img.style.left = imageCount * 120 + 20 + "px";
  img.style.top = "100px";

  let rot = Math.random() * 20 - 10;
  img.style.transform = `rotate(${rot}deg)`;

  body.appendChild(img);
  imageCount++;
});
