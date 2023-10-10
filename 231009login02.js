const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNSME = "hidden"

function onLoginSubmit(evnet){
  // console.log(loginInput.value);
  evnet.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNSME);
  // console.log(username);
  greeting.classList.remove(HIDDEN_CLASSNSME);
  // greeting.innerText = "Hello " + username + "!";
  greeting.innerText = `hello ${username}!`;
}

loginForm.addEventListener("submit", onLoginSubmit );