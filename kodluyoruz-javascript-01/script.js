let userName = prompt("İsim:");
if (userName) {
  userName = userName[0].toUpperCase() + userName.slice(1);
} else {
  userName = "Yabancı";
}

function Timer() {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  //Day index to string
  switch (day) {
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Sali";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
    case 7:
      day = "Pazar";
      break;
  }
  time = `${hour < 10 ? "0" + hour : hour} : ${
    minute < 10 ? "0" + minute : minute
  } : ${second < 10 ? "0" + second : second} ${day}`;
  document.querySelector("h1#time").innerHTML = time;
  setTimeout(Timer, 1000);
}
Timer();
document.querySelector("span#userName").innerHTML = userName+"!";
