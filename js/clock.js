const enterTimeText = document.querySelector("#stay-time");
const clock = document.querySelector("#now-time");
let enterSec = 0;
function displayEnterTime () {
    enterSec += 1;
    enterTime = `${((parseInt(enterSec/60) < 10) ? "0" : "") + (parseInt(enterSec/60))}${((enterSec < 10) ? ":0" : ":") + (enterSec%60)}`;
    enterTimeText.innerText = `Stay time  ${enterTime}`;
}
function getclock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const min = String(date.getMinutes()).padStart(2,"0");
    const sec = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`Now time ${hours}:${min}:${sec}`);
}
displayEnterTime();
setInterval(displayEnterTime,1000);
getclock();
setInterval(getclock,1000);
