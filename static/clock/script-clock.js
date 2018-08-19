// Clock projects
// Anas Abu Farraj

let date = new Date();

// get time hh:mm:ss
let hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
let timeStamp = `Time: ${hours}:${minutes}:${seconds}`;
console.log(timeStamp);

// set hours, minutes, and seconds arms position
let hourPosition = (hours * 360 / 12) + (minutes * (360 / 12) / 60);
let minutePosition = (minutes * 360 / 60) + (seconds * (360 / 60) / 60);
let secondPosition = seconds * 360 / 60;

// query select clock arms
const hourArm = document.querySelector('#hour');
const minuteArm = document.querySelector('#minute');
const secondArm = document.querySelector('#second');

// running the clock
setInterval(function runTheClock() {

  hourPosition += 360 / 3600 / 60;
  minutePosition += 360 / 3600;
  secondPosition += 360 / 60;

  hourArm.style.transform = 'rotate(' + hourPosition + 'deg)';
  minuteArm.style.transform = 'rotate(' + minutePosition + 'deg)';
  secondArm.style.transform = 'rotate(' + secondPosition + 'deg)';

}, 1000);