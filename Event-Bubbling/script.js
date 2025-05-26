// Event  Bullble ✔️

let arr = [
  {
    user: "Ayush Pandey",
    age: 34,
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    isstatus: "stranger",
  },
  {
    user: "Krishna Mishra",
    age: 44,
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    isstatus: "stranger",
  },
  {
    user: "Kalyan",
    age: 24,
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    isstatus: "stranger",
  },
  {
    user: "Shashank",
    age: 14,
    image:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    isstatus: "stranger",
  },
];
let main = document.querySelector(".main");

function hero() {
  let sum = "";
  arr.forEach(function (elem, idx) {
    sum =
      sum +
      ` <div class="card">
    <img src=${elem.image} alt="User Image" />
    <h1>${elem.user}</h1>
    <h5>Age: ${elem.age}</h5>
    <h5>Status: ${elem.isstatus}</h5>
    <button id=${idx}>Add Friend</button>
  </div>`;
    main.innerHTML = sum;
  });
}

hero();

main.addEventListener("click", function (dets) {
  var gold = arr[dets.target.id];
  // gold.isstatus = "Friend";
  if (gold.isstatus == "stranger") {
    gold.isstatus = "Friend";
  } else {
    gold.isstatus = "stranger";
  }
  hero();
});
