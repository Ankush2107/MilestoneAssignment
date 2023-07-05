let cart = [1, 2, 3, 4, 5];

function doubleCartQuantity(cart) {

    let doubledCart = [];
  
    for (let i in cart) {
      let quantity = cart[i] * 2;
      doubledCart.push(quantity);
    }
  
    return doubledCart;
}
   
let doubledCart = doubleCartQuantity(cart);
console.log("Doubled cart: ", doubledCart);