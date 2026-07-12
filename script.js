// SEARCH + FILTER

const searchInput = document.getElementById("search");
const products = document.querySelectorAll(".product");
const checkboxes = document.querySelectorAll(".filter-check");

function filterProducts() {

    const searchValue = searchInput ? searchInput.value.toLowerCase() : "";

    let selectedCategory = [];

    checkboxes.forEach((box) => {
        if (box.checked) {
            selectedCategory.push(box.value.toLowerCase());
        }
    });

    products.forEach((product) => {

        const productName = product.dataset.name.toLowerCase();
        const productCategory = product.dataset.category.toLowerCase();

        const searchMatch = productName.includes(searchValue);

        const categoryMatch =
            selectedCategory.length === 0 ||
            selectedCategory.includes(productCategory);

        if (searchMatch && categoryMatch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}

// SEARCH EVENT
if (searchInput) {
    searchInput.addEventListener("keyup", filterProducts);
}

// FILTER EVENT
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", filterProducts);
});