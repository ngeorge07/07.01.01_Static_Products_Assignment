const url = "https://kea-alt-del.dk/t7/api/products/1528";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  let x;
  document.querySelector("dl .brand").textContent = product.brandname;

  document.querySelector(".info .productName").textContent =
    product.productdisplayname;
  document.querySelector("dl .productName").textContent =
    product.productdisplayname;

  document.querySelector("dd:nth-child(4)").textContent = product.basecolour;

  document.querySelector("dl .description").innerHTML = product.description;

  if (product.discount != null) {
    x = (product.price * product.discount) / 100;
  } else x = product.price;

  document.querySelector(".info .price").textContent = x;

  document.querySelector(
    "img.productImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productImg").alt = product.productdisplayname;
}
