let cartItems = []; // This array will hold the cart items

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const navbar = document.querySelector('.navbar');
    const showCartButton = document.getElementById('showCartButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('fixed');
        showCartButton.style.top = '50px'; // Adjust top position to accommodate fixed navbar
    } else {
        navbar.classList.remove('fixed');
        showCartButton.style.top = '20px'; // Reset top position when scrolling back to top
    }
}

function toggleCartDropdown() {
    const cartDropdown = document.querySelector('.dropdown-content');
    cartDropdown.classList.toggle('show');
    if (cartDropdown.classList.contains('show')) {
        displayCartItems();
    }
}

function displayCartItems() {
    const cartItemList = document.getElementById('cartItemList');
    cartItemList.innerHTML = '';
    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price}`;
            cartItemList.appendChild(listItem);
        });
    } else {
        const emptyCartMessage = document.createElement('li');
        emptyCartMessage.textContent = 'Your cart is empty';
        cartItemList.appendChild(emptyCartMessage);
    }
}

// Function to add item to cart
function addToCart(productId) {
    // Assuming you have product details available, for example:
    const product = {
        id: productId,
        name: 'Product Name',
        price: '$10.00' // Price of the product
    };

    // Add the product to cartItems array
    cartItems.push(product);
}

// Add click event listener to add to cart buttons
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        // displayCartItems(); // Display cart items only when "Show Cart" is clicked
    });
});
