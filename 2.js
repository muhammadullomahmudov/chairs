const itemId = new URLSearchParams(window.location.search).get("id");
const elBody = document.querySelector("body");
function render() {
    const product = chairs.find((el) => el.id == itemId)

    elBody.innerHTML = `    <a href="./index.html" class="canel">Canel</a>
<h2  class="chair-list__title">PRODUCT DETAIL</h2>
<ul class="chair-list">

        <img src="${product.image}" alt="this is chair img" class="box__img">
    <div class="box">
        <h3 class="box__title">${product.name}</h3>
        <h5 class="box__price">${product.price}</h5>
        <div class="btn-box">
            <button class="btn1">Check Out</button>
            <button class="btn2">Add To Cart</button>
        </div>
        <p class="box__about">${product.description}</p>
    </div>
</ul>`
}
render();
