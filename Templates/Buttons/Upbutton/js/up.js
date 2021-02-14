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