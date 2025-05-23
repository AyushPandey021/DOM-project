// change body backgroundColor✔️
let btn = document.querySelector("button");
let body = document.querySelector("body");
btn.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${c1},${c2}, ${c3}) `;
});




