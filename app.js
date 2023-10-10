// 만들어진 코드로 유저의 정보 유무를 함
// 23 LastCodeOrigin과 비교하여 무엇을 생략했는지 확인
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNSME = "hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(evnet){
  evnet.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNSME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeings();
}

function paintGreeings(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNSME);
}

// 정보를 받은 후
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  //Show the form
  loginForm.classList.remove(HIDDEN_CLASSNSME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show greeting
  paintGreeings();
}
console.log(savedUsername);