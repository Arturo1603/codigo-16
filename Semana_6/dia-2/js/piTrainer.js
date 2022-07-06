const user = document.querySelector("#username");
const mensaje= document.querySelector("#mensaje");

const button =  document.querySelector("#start");


user.onkeyup = function() {
    button.removeAttribute("disabled");
}

button.onclick = function() {
    mensaje.innerHTML = `Hello ${user.value}, Lets play`;
}