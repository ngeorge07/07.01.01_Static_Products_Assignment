const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("a:last-child").textContent =
    product.productdisplayname;
  let x;
  document.querySelector("dl .brand").textContent = product.brandname;

  document.querySelector(".info .productName").textContent =
    product.productdisplayname;
  document.querySelector("dl .productName").textContent =
    product.productdisplayname;

  document.querySelector("dd:nth-child(4)").textContent = product.basecolour;

  document.querySelector("dl .season").textContent = product.season;

  if (product.discount != null) {
    x = `${(product.price - (product.price * product.discount) / 100).toFixed(
      2
    )} DKK`;
  } else x = `${product.price} DKK`;

  document.querySelector(".info .price").textContent = x;

  document.querySelector(
    "img.productImg"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productImg").alt = product.productdisplayname;
}
