const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  //grab template
  const template = document.querySelector("#listTemplate").content;

  //clone it
  const clone = template.cloneNode(true);

  //change content
  clone.querySelector(
    ".item img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  clone.querySelector(".item img").alt = product.productdisplayname;

  clone.querySelector(
    ".item small"
  ).textContent = `${product.articletype} | ${product.brandname}`;

  if (product.soldout === 1) {
    clone.querySelector(".item").classList.add("soldOut");
  }

  if (product.discount === null) {
    clone.querySelector(".item small.sale").remove();
    clone.querySelector(".item p").textContent = `${product.price} DKK`;
  } else {
    clone.querySelector(
      ".item small.sale"
    ).textContent = `- ${product.discount}%`;

    let sale = (
      product.price -
      (product.price * product.discount) / 100
    ).toFixed(2);

    const span = document.createElement("span");
    span.classList.add("cut");
    span.innerText = `${product.price} DKK`;

    clone.querySelector(".item p").textContent = `${sale} DKK`;
    clone.querySelector(".item p").appendChild(span);
  }

  clone.querySelector(".item h3").textContent = product.productdisplayname;

  //grab parent
  const parent = document.querySelector("main");

  //append
  parent.appendChild(clone);
}
