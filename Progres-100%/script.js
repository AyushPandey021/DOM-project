
//  setTimeout
//  setIntrtval

// js is a sync lenguage



let btn = document.querySelector('button')
let percent = document.querySelector("#percent")
let growth = document.querySelector("#growth")
let grow = 0
btn.addEventListener('click', function(){

 let int =  setInterval(function(){

grow++
  percent.innerHTML = grow+ '%'
growth.style.width = grow+"%"
  },40)
  setTimeout(()=>{
clearInterval(int)
btn.innerHTML= "Downloaded"
btn.style.opacity=0.5
  },4000)
})