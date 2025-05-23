let arr = [
  "RCB🎉",
  "MI🎉",
  "CSK🎉",
  "SRH🎉",
  "RR🎉",
  "DC🎉",
  "LSG🎉",
  "GT🎉",
  "KKR🎉",
  "PBKS🎉",
];
let num = Math.floor(Math.random() * arr.length);
console.log(arr[num]);
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * arr.length);
  let winner = arr[num];
  console.log(winner);
  h1.innerHTML = winner;
});
