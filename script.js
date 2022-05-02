//1) Slider

// Inspired by https://codepen.io/jasesmith/pen/wvzRYvV

// See also https://stackoverflow.com/questions/15071062/using-javascript-to-edit-css-gradient

const input = document.querySelector("input[id='slide']");
const pageviews = document.querySelector(".pageviews span");
const perMonth = document.querySelector(".per-month span");

// Initalize values.
pageviews.innerText = "100K ";
perMonth.innerText = "$16.00";

// Create dictionaries for mapping from imput to output.
let pw = {
  "1": "10K",
  "2": "50K",
  "3": "100K",
  "4": "500K",
  "5": "1M"
};

let pm = {
  "1": "$8.00",
  "2": "$12.00",
  "3": "$16.00",
  "4": "$24.00",
  "5": "$36.00"
};

// Make the input sensitive to user's manipulations.
input.addEventListener("click", output);

function output() {
  pageviews.innerText = pw[input.value];
  perMonth.innerText = pm[input.value];
  // Slide bar's full and empty sides should have different colors
  input.style.background = "linear-gradient(to right,hsl(174, 77%, 80%) 0%,hsl(174, 77%, 80%) calc("+ (input.value - input.min)/(input.max - input.min) +"*100%), hsl(224, 65%, 95%) calc("+ (input.value - input.min)/(input.max - input.min) +"*100%), hsl(224, 65%, 95%) calc(1*100%))";
}

//2) Toggle

const toggle = document.querySelectorAll("input[type='submit']");

toggle[1].style.opacity = "0";

toggle.forEach(e => e.addEventListener("click", react));

function react(event) {
  for(let i=1; i<=2; i++) {
    if (i == event.target.value) {
      toggle[i-1].style.opacity = "1";
    } else {
      toggle[i-1].style.opacity = "0";
    }
  }
}

//3) The text in discount should be changed in mobile display.
// Don't forget to refresh the page after shrinking/expanding the screen.
// https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window

if (window.innerWidth < 600) {
  document.querySelector(".month-year span").innerText = "-25%";
}