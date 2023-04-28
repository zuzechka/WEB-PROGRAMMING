let randomNumber = Math.floor(Math.random() * 100) + 1; // генерация случайного числа от 1 до 100
let guessCount = 0; // количество попыток

function guessNumber() {
    let guess = document.getElementById("guess").value;
    guessCount++;
    if (guess == randomNumber) {
        document.getElementById("result").innerHTML =
            "Поздравляем, вы угадали число за " + guessCount + " попыток!";
    } else if (guess < randomNumber) {
        document.getElementById("result").innerHTML =
            "Загаданное число больше введенного вами";
    } else {
        document.getElementById("result").innerHTML =
            "Загаданное число меньше введенного вами";
    }
}


function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let rememberMe = document.getElementById("remember-me").checked;

    if (username == "" || password == "") {
        document.body.style.backgroundColor = "#f8d7da";
        document.querySelector(".form").style.backgroundColor = "#f8d7da";
        document.querySelector(".message").innerHTML =
            "Вы не заполнили поля логин и пароль";
    } else if (username == "admin" && password == "12345") {
        document.body.style.backgroundColor = "#d4edda";
        document.querySelector(".form").style.backgroundColor = "#d4edda";
        document.querySelector(".message").innerHTML = "Вы авторизированы";
        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        }
    } else {
        document.body.style.backgroundColor = "#fff";
        document.querySelector(".form").style.backgroundColor = "#fff";
        document.querySelector(".message").innerHTML = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");
    if (username && password) {
        document.getElementById("username").value = username;
        document.getElementById("password").value = password;
        document.getElementById("remember-me").checked = true;
    }
});


function moveBoxes() {
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        let left = Math.floor(Math.random() * (window.innerWidth - box.offsetWidth));
        let top = Math.floor(Math.random() * (window.innerHeight - box.offsetHeight));
        box.style.left = left + "px";
        box.style.top = top + "px";
    }
}

setInterval(moveBoxes, 1000);


function moveUp() {
    let myDiv = document.getElementById("myDiv");
    myDiv.style.top = parseInt(myDiv.style.top) - 100 + "px";
    animate(myDiv);
}

function moveDown() {
    let myDiv = document.getElementById("myDiv");
    myDiv.style.top = parseInt(myDiv.style.top) + 100 + "px";
    animate(myDiv);
}

function moveLeft() {
    let myDiv = document.getElementById("myDiv");
    myDiv.style.left = parseInt(myDiv.style.left) - 100 + "px";
    animate(myDiv);
}

function moveRight() {
    let myDiv = document.getElementById("myDiv");
    myDiv.style.left = parseInt(myDiv.style.left) + 100 + "px";
    animate(myDiv);
}

function animate(element) {
    element.style.transition = "all 0.5s ease-in-out";
    setTimeout(function() {
        element.style.transition = "";
    }, 500);
}