


const title = document.querySelector("div.hello:first-child h1");

// const superHandler = {
//   windowResizeHandler: () => { 

//   }
// }

window.addEventListener('resize', superHandler.windowResizeHandler);

function handleTitleClick() { 
  title.style.color = "blue";
}
function handleMouseEnter() { 
  title.innerText = " Mouse in here! ";
  title.style.color = "#e74c3c";
}
function handleMouseLeave() { 
  title.innerText = " Mouse is gone! ";
  title.style.color = "pink";
}
function handleClickMenu() { 
  title.innerText = " That was right click! ";
  title.style.color = "red";

  document.addEventListener("mousedown", handleMouseLeave);
}

function screenResize() { 
  title.innerText = " Mouse is Resize! ";
  title.style.color = "orange";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
// title.addEventListener("contextmenu", handleClickMenu);
window.addEventListener("resize", screenResize);

// title.addEventListener("scrollWidth", scrollResize);