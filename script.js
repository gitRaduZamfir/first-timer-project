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
let sectionOne = document.getElementById("section_one");
let sectionTwo = document.getElementById("section_two");
let sectionThree = document.getElementById("section_three");
let mainId = document.getElementById("mainID");

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
      canvas.classList.remove("hidden");
      mainId.classList.remove("my-20");
      DrawC();
      sectionOne.classList.add("hidden");
      sectionTwo.classList.add("hidden");
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
