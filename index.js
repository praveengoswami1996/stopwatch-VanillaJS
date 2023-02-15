const hourBox = document.getElementById('hour');
const minuteBox = document.getElementById('minute');
const secondBox = document.getElementById('second');
const startButton = document.getElementById('start');

let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let isOn = false;

function startTimer() {
    if (isOn == true) {
        startButton.disabled = true;
        return;
    }
    interval = setInterval(() => {
        isOn = true;
        seconds+=1;

        if (seconds > 59) {
            minutes+=1;

            if ( minutes > 59) {
                hours+=1;
                if (hours < 10) {
                    hourBox.innerText = '0'+ hours;
                } else {
                    hourBox.innerText = hours;
                }
                minutes = 0;
            }

            if (minutes < 10) {
                minuteBox.innerText = '0'+ minutes;
            } else {
                minuteBox.innerText = minutes;
            }
            seconds = 0;
        }

        if (seconds < 10) {
            secondBox.innerText = '0'+ seconds;
        } else {
            secondBox.innerText = seconds;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    console.log("Yaha bhi Chala hai");
    isOn = false;
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    hourBox.innerText = '0'+ hours;
    minuteBox.innerText = '0'+ minutes;
    secondBox.innerText = '0'+ seconds;
}