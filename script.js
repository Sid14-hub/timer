let sec = 0;
let min = 0;
let time1 = document.getElementById('timer1');
let time3 = document.getElementById('timer3');
function strt() {
    timevalue = setInterval(() => {
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        chngTime();
    }, 1000);
}
function chngTime() {
    if (min < 10)
        time1.innerText = "0" + min;
    else
        time1.innerText = min;
    if (sec < 10)
        time3.innerText = "0" + sec;
    else
        time3.innerText = sec;
}
let reset = document.getElementById('Reset');
let start = document.getElementById('Start');
let stop = document.getElementById('Stop');
stop.addEventListener('click', function () {
    clearInterval(timevalue);
})
start.addEventListener('click', function () {
    strt();
})
reset.addEventListener('click', function () {
    sec = 0;
    min = 0;
    time1.innerText = "0" + min;
    time3.innerText = "0" + sec;
})

let time = document.getElementById('time');
let timerStrt = document.getElementById('Strt');
let clean = document.getElementById('clean');
clean.addEventListener('click', function () {
    time.value = "";
})
timerStrt.addEventListener('click', function () {
    let timerMin = parseInt(time.value.slice(0, 2));
    let timerSec = parseInt(time.value.slice(3, time.length));
    let closeTimer = setInterval(() => {
        if (timerSec == 0) {
            timerSec = 60;
            timerMin--;
        }
        timerSec--;
        timerChngtime();
    }, 1000);
    function timerChngtime() {
        if (timerSec < 10)
            time.value = timerMin.toString() + ":0" + timerSec;
        else
            time.value = timerMin.toString() + ":" + timerSec;
        if (timerMin < 10)
            time.value = "0" + timerMin.toString() + ":" + timerSec;
        if (timerMin == 1)
            time.value = "00" + ":" + timerSec;
        if (timerMin == 0 && timerSec < 10)
            time.value = "00" + ":" + "0" + timerSec;
        if (time.value == "00:00") {
            clearInterval(closeTimer);
            time.value = "Times Up";
        }
    }
})