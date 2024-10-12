let searchEditor = document.getElementById('search');
let GlDate = new Date();
let searchSysOBJ = document.getElementById('service');
let hd = document.getElementById('hd');
let dataOBJ = document.getElementById('DateOBJ');
let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let searchsys = getC('SearchSys');
let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let months=[
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
    ];


window.onload = function () {
    if(searchsys == undefined) {
        searchSysOBJ.innerHTML = "Google";
        setC('SearchSys', 'Google');
        window.location.reload();
    }
    else {
        searchSysOBJ.innerHTML = searchsys;
    }
    dataOBJ.innerHTML = week[GlDate.getDay()] + ", " + GlDate.getDate() + " " + months[GlDate.getMonth()];
    startClock();
}

document.getElementById('qr-share').onclick = function () {
    document.getElementById('qr-share').style.translate = "-150%";
}
function share() {
    document.getElementById('qr-share').style.translate = "0%";
}

function changeSys() {
    if(searchsys == "Google") {
        searchSysOBJ.innerHTML = "Yandex";
        setC('SearchSys', 'Yandex');
        window.location.reload();
    }
    else if(searchsys == "Yandex") {
        searchSysOBJ.innerHTML = "DuckDuckGo";
        setC('SearchSys', "DuckDuckGo");
        window.location.reload();
    }
    else if(searchsys == "DuckDuckGo") {
        searchSysOBJ.innerHTML = "Google"
        setC('SearchSys', "Google");
        window.location.reload();
    }
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        research();
    }
});

function startClock() {
    timerId = setInterval(update, 1000);
    update();  
}

function update() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    hrs.innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    mins.innerHTML = minutes;
}

function research() {
    let src = encodeURI(searchEditor.value);
    if(searchsys == "Google") {
        window.location.href = "https://www.google.com/search?q=" + src;
    }
    else if(searchsys == "Yandex") {
        window.location.href = "https://www.yandex.ru/search/?text=" + src;
    }
    else if(searchsys == "DuckDuckGo") {
        window.location.href = "https://duckduckgo.com/?q=" + src;
    }
}

function hidebar() {
    hd.style.translate = "-0% -150%";
}
function showbar() {
    hd.style.translate = "-0% -30%";
}

function about() {
    window.location.href = "about.html";
}
