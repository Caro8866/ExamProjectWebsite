// Database integration

//   "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine?_embed";

window.addEventListener("DOMContentLoaded", init);

function init(event) {
  loadWines();
}
// FETCH DATA
async function loadWines() {
  const response = await fetch(
    "https://amorea.dk/WP-Exam/LeCaviste/wp-json/wp/v2/wine?_embed"
  );
  const data = await response.json();
  displayData(data);
}

//POPULATE PAGE
function displayData(wines) {
  console.log(wines);

  wines.forEach((wine) => {
    // GRAB TEMPLATE
    const templateEl = document.querySelector(".productCard").content;

    // CLONE TEMPLATE
    const clone = templateEl.cloneNode(true);

    // CHANGE CONTENT
    clone.querySelector(".productName").textContent = wine.title.rendered;
    clone.querySelector(".productPrice").textContent = `DKK ${wine.price}`;
    clone
      .querySelector(".viewBtn")
      .setAttribute("href", `productPage.html?_id=${wine.id}`);
    // clone.querySelector(".productImage").src =
    // wine. ${wp:featuredmedia
    //   .[0].media_details.sizes.medium.source_url;
    // GRAB PARENT
    const parent = document.querySelector(".products_grid");

    // APPEND PARENT
    parent.appendChild(clone);
  });
}
