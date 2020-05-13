// Введение в события
const btn = document.querySelector("button");
const link = document.querySelector("a");
const container = document.querySelector(".container");
// console.dir(btn);

btn.addEventListener("click", (e) => {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("button");
  div.textContent = Math.random();
  nestedBtn.textContent = "button";
  div.appendChild(nestedBtn);
  container.appendChild(div);
});

container.addEventListener("click", (e) => {
  // console.dir(e.target);
  if (e.target.tagName === "BUTTON") {
    console.dir(e.target);
  }
});

function clickHandler(e) {
  e.preventDefault();
  console.log("sss");
}

link.addEventListener("click", clickHandler);

// link.removeEventListener("click", clickHandler);
