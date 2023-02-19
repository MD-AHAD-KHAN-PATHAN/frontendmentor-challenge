//Target date in milliseconds
const countDownDate = new Date("Apr 6, 2023 00:00:00").getTime();

let x = setInterval(() => {
  //Today date in milliseconds
  const today = new Date().getTime();

  // Difference of target date to todays date
  let distance = countDownDate - today;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  //Use modulus operator (%) to return the division remainder
  //Example if you have 2.5 min the remainder will will 0.5min and the modulus converts 0.5min to 30sec
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);