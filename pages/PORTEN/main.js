var link = document.querySelector(".login__link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        console.log("Необходимо ввести логин и пароль");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}
