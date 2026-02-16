const btn = document.querySelector("button");
const content = document.querySelector("#slider");
btn.addEventListener("click", () => {
  if (content.style.animationPlayState === "paused") {
    content.style.animationPlayState = "running";
    btn.innerText = "Stop animation";
  } else {
    content.style.animationPlayState = "paused";
    btn.innerText = "Start animation";
  }
});
