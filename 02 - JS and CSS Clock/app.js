'use strict';

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);
  console.log(secondsDegrees);

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360 ) + 90;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hrs = now.getHours();
  const hrsDegrees = ((hrs / 60) * 360 ) + 90;
  hourHand.style.transform = `rotate(${hrsDegrees}deg)`;
}

setInterval(setDate, 1000)
