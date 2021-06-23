const percentage = document.querySelector(".percentage");
const percent = document.querySelector(".percent");
const section = document.querySelector(".section");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  section.classList.toggle("dark");
});

navigator.getBattery().then(function (battery) {
  percentage.style.width = battery.level * 100 + "%";
  percent.innerHTML = battery.level * 100 + "%";
});
