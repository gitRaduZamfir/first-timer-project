let defDays = document.getElementById("daysID");
let defHours = document.getElementById("hoursID");
let defMinutes = document.getElementById("minutesID");
let defSeconds = document.getElementById("secondsID");
let startBtn = document.getElementById("startBtn");
let message = document.getElementById("message");
let timer = document.getElementById("timer");
let inputValue = document.getElementById("countdown");
let label = document.getElementById("labelID");
let refresh = document.getElementById("refresh_btn");

let intervalId;

function countDownFn(x) {
  let count = x;

  intervalId = setInterval(function () {
    count--;
    let days = Math.floor(count / 86400);
    defDays.textContent = days;
    let hours = Math.floor((count - days * 86400) / 3600);
    defHours.textContent = hours;
    let minutes = Math.floor((count - days * 86400 - hours * 3600) / 60);
    defMinutes.textContent = minutes;
    let seconds = count - days * 86400 - hours * 3600 - minutes * 60;
    defSeconds.textContent = seconds;

    if (count <= 0) {
      clearInterval(intervalId);
      message.classList.add("countdown_message_active");
      label.classList.add("label_active");
      startBtn.classList.add("button_active");
      inputValue.classList.add("input_active");
      timer.classList.add("timer_all_active");
    }
  }, 1000);
}

startBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  let date = new Date(inputValue.value);
  let currentDate = new Date();
  let secondsCount = Math.floor((date - currentDate) / 1000);

  countDownFn(secondsCount);
});

function windowReload() {
  window.location.reload();
}

refresh.addEventListener("click", windowReload);
