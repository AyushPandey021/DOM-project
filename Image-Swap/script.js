// getAttribute and setAttribute
// reating an Element
// mouse events , Keyboard Events, scroll events
// double click events , wheel events, etc
//  creating image-swap using getAttribute and setAttribute✔️

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let imgsrc1 = img1.getAttribute("src");
  let imgsrc2 = img2.getAttribute("src");

  img1.setAttribute("src", imgsrc2);
  img2.setAttribute("src", imgsrc1);
});
