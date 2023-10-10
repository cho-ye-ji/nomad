const h1 = document.querySelector("div.hello:first-child h1");
const bodyTag = document.body;
const hello = document.querySelector("div.hello");

console.log(window.innerWidth);

const winInnerWidth = window.innerWidth;

function windowResize() { 
  
  if (winInnerWidth >= 0 && winInnerWidth < 650) {
    h1.classList.add("fontWhite");
    bodyTag.style.backgroundColor = "cornflowerblue";
  } else if (winInnerWidth >= 650 && winInnerWidth < 1250) {
    h1.classList.add("fontWhite");
    bodyTag.style.backgroundColor = "purple";
  } else {
    bodyTag.style.backgroundColor = "";
  }
}

window.addEventListener('resize', windowResize);


