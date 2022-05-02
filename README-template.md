# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](images/IPCS.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [My live site URL here](https://interactive-pricing-component-solution-3.vigengareyan.repl.co/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<input id="slide" type="range" class="slider" min="1" max="5" value="3">
```
```css
/* Slide */

input[id="slide"] {
  ...
}
...
input[id="slide"]::-webkit-slider-thumb {
  ...
}

input[id="slide"]::-webkit-slider-thumb:hover {
  background-color: hsl(174, 77%, 80%);
}

...

input[id="slide"]::-webkit-slider-thumb:active {
  background-color: hsl(174, 86%, 45%);
  cursor: grabbing;
}

...

/* Switch */
.switch {
  ...
}

.switch:hover {
  background-color: hsl(174, 77%, 80%);
}

input[type="submit"] {
  border-radius: 50%;
  background-color: white;
  color: white;
  border: 1px solid white;
  cursor: pointer;
}
```
```js
//1) Slider

...
function output() {
  ...
  input.style.background = "linear-gradient(to right,hsl(174, 77%, 80%) 0%,hsl(174, 77%, 80%) calc("+ (input.value - input.min)/(input.max - input.min) +"*100%), hsl(224, 65%, 95%) calc("+ (input.value - input.min)/(input.max - input.min) +"*100%), hsl(224, 65%, 95%) calc(1*100%))";
}

//2) Toggle
...
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
...

if (window.innerWidth < 600) {
  document.querySelector(".month-year span").innerText = "-25%";
}
```

### Continued development

Make JS more responsive to the current screen size.

### Useful resources

- [w3schools](https://www.w3schools.com/) - This helped me with slide bar and toggle switch.
- [stackoverflow](https://stackoverflow.com/) - This helped me with JS code on screen size.

## Author

- Frontend Mentor - [@vigengareyan](https://www.frontendmentor.io/profile/vigengareyan)
