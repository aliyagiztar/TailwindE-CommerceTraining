const addProductBtn = document.querySelector(".addProductBtn");
const drawerMenu = document.querySelector(".drawerMenu");
const createProductBtn = document.querySelector(".createProductBtn");
const productsList = document.querySelector(".productsList");
const productCount = document.querySelector(".productCount");
const productNameInput = document.querySelector(".productNameInput");
const productPriceInput = document.querySelector(".productPriceInput");
const productDescriptionInput = document.querySelector(".productDescriptionInput");
const closeDrawer = document.querySelector(".closeDrawer");

const products = [];

addProductBtn.addEventListener("click", () => {
    drawerMenu.classList.toggle("hidden");
});

closeDrawer.addEventListener("click", () => {
    drawerMenu.classList.add("hidden");
});

createProductBtn.addEventListener("click", () => {
    const product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        description: productDescriptionInput.value
    };
    products.push(product);
    updateProductsList();
});

function updateProductsList() {
    productsList.innerHTML = "";
    products.forEach(product => {
        const productEl = document.createElement("div");
        productEl.classList.add("bg-white", "p-4", "border", "flex-1", "mb-4");
        productEl.innerHTML = `
            <h4 class="font-bold">${product.name}</h4>
            <p>${product.price} ₺</p>
            <p>${product.description}</p>
            <button class="mt-2 p-2 border">Ürünü Düzenle</button>
        `;
        productsList.appendChild(productEl);
    });
    productCount.textContent = products.length;
}
