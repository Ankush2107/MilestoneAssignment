const originalPrice = 50.99;
const discountedPrice = 39.99;

const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    const roundedPercentage = Math.round(discountPercentage * 100) / 100; 
  
    return roundedPercentage;
};

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(discountPercentage);