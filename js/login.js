const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout-btn");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit () {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameByUser = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameByUser);
    paintGreetings(usernameByUser);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function onLogOutClick (){
    localStorage.removeItem(USERNAME_KEY);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    location.reload()
}

function paintGreetings (username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener("click", onLogOutClick);
const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    logoutBtn.classList.add(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUsername);
    logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}