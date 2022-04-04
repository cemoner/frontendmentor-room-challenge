var wrapper = document.querySelector(".wrapper");

let innerWidth = document.body.offsetWidth;
let widthString = innerWidth.toString();
widthString += "px";
wrapper.style.maxWidth = widthString;
