let text1 = document.getElementById('v1');
let text2 = document.getElementById('v2');
let text3 = document.getElementById('v3');

window.onload = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        text2.innerHTML = "";
    }
    text1.style.translate = "-0% -50%";
    setTimeout(
        function () {
            text2.style.translate = "-50% -50%";
            endAnim();
        }, 500
    );
}

function endAnim() {
    setTimeout(
        function () {
            text3.style.translate = "-0% -50%";
            fadeOut();
        }, 500
    );
}

function fadeOut() {
    document.getElementById("name").style.background = "transparent";
    document.getElementById("splash").style.background = "transparent";
    text1.style.color = "var(--color-font-important)";
    text2.style.color = "var(--color-font-important)";
    text3.style.color = "var(--color-font-important)";
}

function goahead() {
    window.location.href = "index.html";
}
function protip() {
    window.location.href = "https://docs.google.com/gview?url=http://wertywin2353.github.io/wws/protips.docx&embedded=true";
}
document.getElementById('qr-share').onclick = function () {
    document.getElementById('qr-share').style.translate = "-150%";
}
function share() {
    document.getElementById('qr-share').style.translate = "0%";
}
