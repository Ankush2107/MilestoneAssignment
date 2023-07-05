let customerCart = ["item1", "item2", "item1", "item3", "item2"];

function removeDuplicates(cart) {
    let uniqueCart = [];
  
    for (let i in cart) {
      if (!uniqueCart.includes(cart[i])) {
        uniqueCart.push(cart[i]);
      }
    }
  
    return uniqueCart;
  }
  
 
  let uniqueCart = removeDuplicates(customerCart);
  console.log("Cart without duplicates: " + uniqueCart);