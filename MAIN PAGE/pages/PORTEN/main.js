var link = document.querySelector(".login__link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");

var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

var registration = popup.querySelector("a.reglink");
var regpopup = document.querySelector(".modal-registration");
var regclose = document.querySelector(".regmodal-close");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

//LoginModalOpen

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

//LoginModalClose

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

//ShakeAnimation

form.addEventListener("submit", function(evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

//CloseOnEscBtn

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        } else {
            if (regpopup.classList.contains("active")) {
                evt.preventDefault();
                regpopup.classList.remove("active");
            }
        }
    }
});

//RegModalOpen

registration.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    regpopup.classList.add("regmodal-show");

});

//RegModalClose

regclose.addEventListener("click", function(evt) {
    evt.preventDefault();
    regpopup.classList.remove("regmodal-show");
});

//UpButtonScroll

document.getElementById("top").onclick = function scrollUpFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() { scrollFunction() }

//UpButtonHide

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}