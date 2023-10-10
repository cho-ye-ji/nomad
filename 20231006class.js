const h1 = document.querySelector("div.hello:first-child h1");

// 클레스 네임으로 할 때
// function handleMousEnter() {
//   const clickedClass = "clicked"; 여러번 쓸 때 에러 날 수가 있어서 지정해줌
//   if (h1.className === clickedClass ) {
//     h1.className = "";
//   } else {
//     h1.className = clickedClass;
//   }
//   console.log(h1.className);
// }
// h1.addEventListener('click', handleMousEnter);

//classList 
// function handleMousEnter() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
//   console.log(h1.className);
// }

// h1.addEventListener("click", handleMousEnter);

// toggle
function handleMousEnter() {
  h1.classList.toggle("clicked"); // 하나만 쓰기 때문에 클래스명으로 적어줘도 됨
}

h1.addEventListener("click", handleMousEnter);