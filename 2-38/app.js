// Всплытие и погружения события
const btn = document.querySelector(".btn");
const wrap = document.querySelector(".wrap");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("click");
});

wrap.addEventListener(
  "click",
  (e) => {
    console.log("Wrap click");
  },
  { capture: true }
);

document.body.addEventListener(
  "click",
  (e) => {
    console.log("Body click");
  },
  { capture: true }
);
