const url = "https://kea-alt-del.dk/t7/api/articletypes";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleType(data));

function handleType(data) {
  data.sort(sorting);
  data.forEach(showType);
}

function sorting(a, b) {
  const nameA = a.articletype.toUpperCase(); // ignore upper and lowercase
  const nameB = b.articletype.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

function showType(product) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("a").textContent = product.articletype;

  document.querySelector("ul").appendChild(clone);
}
