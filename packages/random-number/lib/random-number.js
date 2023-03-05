"use strict";

// 1
function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  console.log("123123")
  return num;
}

// 2
module.exports = randomNumber;
