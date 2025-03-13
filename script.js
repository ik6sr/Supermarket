document.addEventListener("DOMContentLoaded", () => {
    // البحث عن المنتجات
    const searchInput = document.getElementById("search");
    const productItems = document.querySelectorAll(".product");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        productItems.forEach(product => {
            const productName = product.querySelector(".product-name").textContent.toLowerCase();
            product.style.display = productName.includes(searchTerm) ? "block" : "none";
        });
    });

    // إضافة المنتج إلى السلة
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItems = document.getElementById("cart-items");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product");
            const productName = product.querySelector(".product-name").textContent;
            const productPrice = product.querySelector(".product-price").textContent;
            
            const cartItem = document.createElement("li");
            cartItem.textContent = ${productName} - ${productPrice};
            cartItems.appendChild(cartItem);
        });
    });
});
