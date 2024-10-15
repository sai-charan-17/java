// script.js
let cartCount = 0;

// Function to update the cart count display
function updateCartCount() {
    const cartLink = document.querySelector('.cart');
    cartLink.textContent = `🛒 Cart (${cartCount})`;
}

// Event listener for all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.getAttribute('data-name');
        const productPrice = event.target.getAttribute('data-price');

        // Add to cart logic (you can extend this to store items)
        cartCount++; // Increment cart count
        updateCartCount(); // Update the displayed cart count

        // Optional: Display an alert or a message for the added product
        alert(`${productName} has been added to your cart!`);
    });
});

// Initial cart count update
updateCartCount();



