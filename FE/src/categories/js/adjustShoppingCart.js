if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
};

function ready() {
    var removeCartItemButtons = document.getElementsByClassName("btn-remove");
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeItemInShoppingCart);
    };
};

function removeItemInShoppingCart(event) {
    var buttonClicked = event.target.parentElement;
    // var nameProduct = buttonClicked.getElementsByClassName("name-product")[0].innerText;
    // localStorage.removeItem(nameProduct);
    buttonClicked.remove();
    updateCartTotal();
};

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("shopping-cart")[0];
    var cartItems = cartItemContainer.getElementsByClassName("cart-item");
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i];
        var priceElement = cartItem.getElementsByClassName("cart-price")[0];
        var quantityElement = cartItem.getElementsByClassName("cart-quantity-input")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total += (price * quantity);
    };
    document.getElementsByClassName("cart-total-price")[0].innerText = "Total : $" + Math.round(total, 2) + "/-";
};