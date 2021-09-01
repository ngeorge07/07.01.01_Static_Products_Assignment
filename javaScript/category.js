const url = "https://kea-alt-del.dk/t7/api/seasons/";

const images = [
  "../images/fall.jpg",
  "../images/spring.jpg",
  "../images/summer.jpg",
  "../images/winter.jpg",
];

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleCategory(data);
  });

function handleCategory(data) {
  data.forEach(showCateory);
}

let i = 0;
function showCateory(category) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("img").src = images[i];
  i++;

  clone
    .querySelector("a")
    .setAttribute("href", "product-list.html?season=" + category.season);
  clone.querySelector("p").textContent = category.season;

  document.querySelector("main").appendChild(clone);
}
