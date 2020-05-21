// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.

const btn = document.getElementById("btn");
const container = document.querySelector(".container");

let responseB;

function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
  xhr.addEventListener("load", (e) => {
    const response = JSON.parse(xhr.response);
    responseB = true;
    cb(response);
  });
}

btn.addEventListener("click", (e) => {
  getUsers(renderUserForHtml);
});

container.addEventListener("click", ({ target }) => {
  const cardTitle = target.classList.contains("card-title") ? target : null;
  showAddress(cardTitle, target);
});

function renderUserForHtml(response) {
  const fragment = document.createDocumentFragment();

  response.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "text-white",
      "bg-primary",
      "p-2",
      "bd-highlight",
      "mb-3"
    );

    card.style.maxWidth = "400px";
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.style.position = "reletiv";

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.classList.add("d-none");
    cardText.style.position = "absolute";
    cardText.style.zIndex = "1";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    cardHeader.textContent = `Login: ${user.username}, Name: ${user.name}, Email: ${user.email}`;

    const { address } = user;

    cardTitle.textContent = "Адрес";

    cardText.appendChild(renderAddressForHtml(address));

    fragment.appendChild(card);
  });
  container.classList.add(
    "d-flex",
    "bd-highlight",
    "mb-3",
    "flex-wrap",
    "justify-content-around"
  );
  container.appendChild(fragment);
}

function renderAddressForHtml({ street, suite, city, zipcode }) {
  const randomColor = randomColorClass();

  const ul = document.createElement("ul");
  ul.classList.add("list-group");

  const liStreet = document.createElement("li");
  liStreet.classList.add("list-group-item", randomColor);
  liStreet.textContent = `Улица: ${street}`;

  const liSuite = document.createElement("li");
  liSuite.classList.add("list-group-item", randomColor);
  liSuite.textContent = `Сайт: ${suite}`;

  const liCity = document.createElement("li");
  liCity.classList.add("list-group-item", randomColor);
  liCity.textContent = `Город: ${city}`;

  const liZipcode = document.createElement("li");
  liZipcode.classList.add("list-group-item", randomColor);
  liZipcode.textContent = `ЗИП-каод: ${zipcode}`;

  ul.appendChild(liStreet);
  ul.appendChild(liSuite);
  ul.appendChild(liCity);
  ul.appendChild(liZipcode);

  return ul;
}

function randomColorClass() {
  const arrColor = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  const randomValue = Math.floor(Math.random() * arrColor.length);
  return "list-group-item-" + arrColor[randomValue];
}

function showAddress(cardTitle, target) {
  if (cardTitle === target) {
    const cardText = cardTitle.parentElement.querySelector(".card-text");
    cardText.classList.toggle("d-none");
    let displayNoneCardText = cardText.classList.contains("d-none");
    setTimeout(() => {
      if (!displayNoneCardText) {
        cardText.classList.add("d-none");
      }
    }, 3000);
  }
}
