"use strict";

const charactersSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// 1
function randomString(len = 5) {
  const str = [...Array(len)]
      .map((i) =>
          charactersSet.charAt(Math.floor(Math.random() * charactersSet.length))
      )
      .join("");
    console.log("123")
  return str;
}

// 2
module.exports = randomString;
