const url = "https://kea-alt-del.dk/t7/api/seasons/";

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

function showCateory(category) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone
    .querySelector("a")
    .setAttribute("href", "product-list.html?season=" + category.season);
  clone.querySelector("a").textContent = category.season;

  document.querySelector("main").appendChild(clone);
}
