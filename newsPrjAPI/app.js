// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("X-Api-Key", "c48ea9ffda714a518a0e8eea64d8da9b");
        xhr.send();
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
// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = "c48ea9ffda714a518a0e8eea64d8da9b";
  const apiUrl = "https://newsapi.org/v2";
  const proxyCors = "https://cors-anywhere.herokuapp.com/";

  return {
    topHeadLines(country = "ua", cb) {
      http.get(
        `${proxyCors}${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`,
        cb
      );
    },
    everything(query, cb) {
      http.get(
        `${proxyCors}${apiUrl}/everything?q=${query}&apiKey=${apiKey}`,
        cb
      );
    },
  };
})();

//  init selects
document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  loadNews();
});

// load news function
function loadNews() {
  newsService.topHeadLines("ua", onGetResponce);
}

// function on get responce from server
function onGetResponce(err, res) {
  if (err) {
    console.log(err);
    return;
  }
  renderNews(res.articles);
}

// function redering news

function renderNews(news) {
  const newsContainer = document.querySelector(".news-container .row");
  let fragment = "";
  news.forEach((newsItem) => {
    if (!newsItem["description"]) return;
    const el = newsTemplate(newsItem);
    fragment += el;
  });
  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

//news irem template function

function newsTemplate({ urlToImage, title, url, description }) {
  return `
  <div class='col s12'>
    <div class='card'>
      <div class='card-image'>
        <img src='${urlToImage}'>
        <span class="card-title">${title || "none title"}</span>
      </div>
      <div class="card-content">
        <p>${description || "none description"}</p>
      </div>
      <div class="card-action">
        <a href="${url}">Read more</a>
      </div>
    </div>
  </div>
  `;
}
