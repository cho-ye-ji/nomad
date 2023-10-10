const h1 = document.querySelector("div.hello:first-child h1");

function handleMousEnter() { 
  const currentColor = h1.style.color;
  let newColor;

  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor; // 새로 받은 데이터를 현재 화면에 적용하겠다.
}

h1.addEventListener('click', handleMousEnter);