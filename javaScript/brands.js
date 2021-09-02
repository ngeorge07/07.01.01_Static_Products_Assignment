const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleBrand(data));

function handleBrand(data) {
  data.sort(sorting);
  data.forEach(showBrand);
}

function sorting(a, b) {
  const nameA = a.brandname; //.toUpperCase() not working?
  const nameB = b.brandname;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

function showBrand(product) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector("a").textContent = product.brandname;

  document.querySelector("ul").appendChild(clone);
}
