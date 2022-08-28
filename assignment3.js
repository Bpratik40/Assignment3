const body = document.getElementById("body");

const clothHeader = document.createElement("h1");
clothHeader.className = "header";
clothHeader.innerHTML = "Clothing for Men and Women";

const accHeader = document.createElement("h1");
accHeader.className = "header";
accHeader.innerHTML = "Accessories for Men and Women";

body.appendChild(clothHeader);

const container1 = document.createElement("div");
container1.className = "container";
container1.id = "clothContainer";

const container2 = document.createElement("div");
container2.className = "container";
container2.id = "accContainer";

for (i = 0; i < productList.length; i++) {
  if (productList[i].isAccessory === false) {
    const card = document.createElement("div");
    card.className = "card";

    const productImage = document.createElement("img");
    productImage.className = "productImage";
    productImage.src = productList[i].preview;

    const cardContent = document.createElement("div");
    cardContent.className = "cardContent";

    const heading3 = document.createElement("h3");
    heading3.tagName = "h3";
    heading3.innerHTML = productList[i].name;

    const heading4 = document.createElement("h4");
    heading4.tagName = "h4";
    heading4.innerHTML = productList[i].brand;

    const heading5 = document.createElement("h5");
    heading5.tagName = "h5";
    heading5.innerHTML = "Rs  " + productList[i].price;

    cardContent.append(heading3, heading4, heading5);
    card.append(productImage, cardContent);
    container1.append(card);
    body.append(container1);
  }
}

body.appendChild(accHeader);

for (i = 0; i < productList.length; i++) {
  if (productList[i].isAccessory === true) {
    const card = document.createElement("div");
    card.className = "card";

    const productImage = document.createElement("img");
    productImage.className = "productImage";
    productImage.src = productList[i].preview;

    const cardContent = document.createElement("div");
    cardContent.className = "cardContent";

    const heading3 = document.createElement("h3");
    heading3.tagName = "h3";
    heading3.innerHTML = productList[i].name;

    const heading4 = document.createElement("h4");
    heading4.tagName = "h4";
    heading4.innerHTML = productList[i].brand;

    const heading5 = document.createElement("h5");
    heading5.tagName = "h5";
    heading5.innerHTML = "Rs  " + productList[i].price;

    cardContent.append(heading3, heading4, heading5);
    card.append(productImage, cardContent);
    container2.append(card);
    body.append(container2);
  }
}
