function updateClock(){
 let clock = document.querySelector('#clock')
let now = new Date()

let hour = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

hour: hour<10  ? "0"+ hour:hour
minutes: minutes <10 ? "0" + minutes:minutes
seconds: seconds <10 ? "0" + seconds:seconds
clock.textContent = `${hour}:${minutes}:${seconds}`
}
setInterval(updateClock,1000)
updateClock()