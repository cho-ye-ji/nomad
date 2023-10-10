//querySelector
// const loginForm = document.getElementById("login-form"); 
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

// function onLoginBtnClick(){
//   const username = loginInput.value;
//   console.log(username);
// }
// loginButton.addEventListener('click', onLoginBtnClick);

// #2
function onLoginSubmit(evnet){
  evnet.preventDefault();
  console.log(loginInput.value);
  // const username = loginInput.value;
  // console.log(username);
}
//#3
function handleLinkClick(event){
  event.preventDefault();
  console.log(event);
  alert("clicked!")
}

loginForm.addEventListener("submit", onLoginSubmit );
// #3
link.addEventListener("click", handleLinkClick );