const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
let cnt = 0;
const btn = document.querySelector(".fbut__drink");
const counter = document.querySelector(".num");

btn.addEventListener("click", (e) => {
  if (e.target.id === "plus") {
    cnt++;
    counter.textContent = cnt;
  }
  if (e.target.id === "minus") {
    cnt--;
    counter.textContent = cnt;
  }
});
