const calculateTotalCost = (cart) => {
    let totalCost = 0;
  
    cart.forEach((item) => {
      const { unitPrice, quantity } = item;
      totalCost += unitPrice * quantity;
    });
  
    return totalCost;
};
 
const cart = [ { unitPrice: 10.99, quantity: 2 }, { unitPrice: 5.99, quantity: 3 },{ unitPrice: 3.49, quantity: 4 },];
  
const totalCost = calculateTotalCost(cart);
console.log(totalCost);