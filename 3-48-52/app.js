// Введение в AJAX
const btn = document.getElementById("btn");
const btnAddPost = document.getElementById("btn-new-post");
const container = document.querySelector(".container");

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");

  xhr.send(JSON.stringify(body));
}

function cardTemplate(post) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = post.title;

  const article = document.createElement("p");
  article.classList.add("card-text");
  article.textContent = post.body;

  cardBody.appendChild(title);
  cardBody.appendChild(article);

  card.appendChild(cardBody);

  return card;
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();

  response.forEach((post) => {
    fragment.appendChild(cardTemplate(post));
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", () => {
  getPosts(renderPosts);
});

btnAddPost.addEventListener("click", (e) => {
  createPost(
    {
      title: "foo",
      body: "bar",
      userId: 1,
    },
    (response) => {
      const card = cardTemplate(response);
      container.insertAdjacentElement("afterbegin", card);
    }
  );
});

//Универсальная функция для отправки запросов на сервер

function myHttpRequest({ method, url } = {}, cb) {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.addEventListener("load", () => {
      if (Math.floor(xhr.status / 100) !== 2) {
        cb(`Error. Status code: ${xhr.status}`, xhr);
        return;
      }
      const response = JSON.parse(xhr.responseText);
      cb(null, response);
    });

    xhr.addEventListener("error", () => {
      cb(`Error. Status code: ${xhr.status}`, xhr);
    });

    xhr.send();
  } catch (error) {
    cb(error);
  }
}

// myHttpRequest(
//   { method: "get", url: "https://jsonplaceholder.typicode.com/posts" },
//   (error, res) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log(res);
//   }
// );

function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });
        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }
        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}

// const myHttp = http();

// myHttp.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   },
//   { "content-Type": "application/json" },
//   (err, res) => {
//     console.log(err, res);
//   }
// );
