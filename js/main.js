// DOM elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const myName = document.getElementById("name");
const focus = document.getElementById("focus");

// Show time
const showTime = () => {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";
  // 12hr Format
  hour = hour % 12 || 12;
  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm}`;
  setTimeout(showTime, 1000);
};

// Add Zero
const addZero = (n) => {
  return (parseInt(n) < 10 ? "0" : "") + n;
};

// Set Background and Greeting
const setBgGreet = () => {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('img/morning.jpg')";
    greeting.textContent = "Good Morning,";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon,";
  } else {
    // Night
    document.body.style.backgroundImage = "url('img/night.jpg')";
    greeting.textContent = "Good Evening,";
    document.body.style.color = "white";
  }
};

// Get Name
const getName = () => {
  localStorage.getItem("name") === null
    ? (myName.textContent = "[Enter Name]")
    : (myName.textContent = localStorage.getItem("name"));
};

// Set Name
const setName = (e) => {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("name", e.target.innerText);
      myName.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
};

// Get Focus
const getFocus = () => {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
};

// Set Focus
const setFocus = (e) => {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
};

myName.addEventListener("blur", setName);
myName.addEventListener("keypress", setName);

focus.addEventListener("blur", setFocus);
focus.addEventListener("keypress", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
