if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
};

function ready() {
    // var removeCartItemButtons = document.getElementsByClassName("btn-remove");
    // for (var i = 0; i < removeCartItemButtons.length; i++) {
    //     var button = removeCartItemButtons[i];
    //     button.addEventListener("click", removeItemInShoppingCart);
    // };
    // var quantityInputs = document.getElementsByClassName("cart-quantity-input");
    // for (var i = 0; i < quantityInputs.length; i++) {
    //     var input = quantityInputs[i];
    //     input.addEventListener("change", quantityChanged);
    // };
    var addToCartButtons = document.getElementsByClassName("add-to-cart-btn");
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
    };
};

// function removeItemInShoppingCart(event) {
//     var buttonClicked = event.target;
//     buttonClicked.parentElement.remove();
//     updateCartTotal();
// };

// function quantityChanged(event) {
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//     };
//     updateCartTotal();
// };

function addToCartClicked(event) {
    var button = event.target;
    var productItem = button.parentElement;
    var nameProduct = productItem.getElementsByClassName("name-product")[0].innerText;
    var priceProduct = productItem.getElementsByClassName("price-product")[0].innerText;
    var imageProductSrc = productItem.getElementsByClassName("image-product")[0].src;
    addItemToShoppingCart(nameProduct, priceProduct, imageProductSrc);
    // updateCartTotal();
};

function addItemToShoppingCart(name, price, imageSource) {
    localStorage.setItem(name, [imageSource, name, price])
    // var cartBoxItem = document.createElement("div");
    // cartBoxItem.classList.add("cart-item");
    // cartBoxItem.classList.add("box");
    // var cartItems = document.getElementsByClassName("cart-items")[0];
    // var cartNameItems = cartItems.getElementsByClassName("name-product");
    // for (var i = 0; i < cartNameItems.length; i++) {
    //     if (cartNameItems[i].innerText == name) {
    //         alert("This product is already added to the shopping cart!");
    //         return;
    //     }
    //     localStorage.setItem(name, [imageSource, name, price])
    // };
    // var cartBoxItemContens =
    //     `<i class="btn-remove fas fa-trash"></i>
    // <img class="img-product-in-cart" src="${imageSource}" alt="">
    // <div class="content">
    //     <h3 class="name-product">${name}</h3>
    //     <span class="cart-price price">${price}/-</span>
    //     <input class="cart-quantity-input" type="number" value="1">
    // </div>`;
    // cartBoxItem.innerHTML = cartBoxItemContens;
    // cartItems.append(cartBoxItem);
    // cartBoxItem.getElementsByClassName("btn-remove")[0].addEventListener("click", removeItemInShoppingCart);
    // cartBoxItem.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);
};

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName("shopping-cart")[0];
//     var cartItems = cartItemContainer.getElementsByClassName("cart-item");
//     var total = 0;
//     for (var i = 0; i < cartItems.length; i++) {
//         var cartItem = cartItems[i];
//         var priceElement = cartItem.getElementsByClassName("cart-price")[0];
//         var quantityElement = cartItem.getElementsByClassName("cart-quantity-input")[0];
//         var price = parseFloat(priceElement.innerText.replace("$", ""));
//         var quantity = quantityElement.value;
//         total += (price * quantity);
//     };
//     document.getElementsByClassName("cart-total-price")[0].innerText = "Total : $" + Math.round(total, 2) + "/-";
// };