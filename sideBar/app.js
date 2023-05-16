const container = document.querySelector(".container");
const hide = document.querySelector(".cross");

hide.addEventListener("click", function() {
  container.style.transform = "translateX(-100%)";
  container.style.transition = "transform 0.5s";
});

const display = document.querySelector(".toggle");
display.addEventListener("click", function() {
  if (container.style.transform === "translateX(-100%)") {
    container.style.transform = "translateX(0%)";
  } else {
    container.style.transform = "translateX(-100%)";
  }
  container.style.transition = "transform 0.5s";
});
