function calculateRentalCost(daysRented, carType) {
    let rentalCost = 0;
  
    switch (carType) {
      case "Economy":
        rentalCost = 4000;
        break;
      case "Midsize":
        rentalCost = 10000;
        break;
      case "Luxury":
        rentalCost = 20000;
        break;
      default:
        console.log("Invalid car type");
        return rentalCost;
    }
  
    let totalCost = rentalCost * daysRented;
    return totalCost;
  }
  
  let daysRented = 5;
  let carType = "Midsize";
  let totalCost = calculateRentalCost(daysRented, carType);
  console.log("Total Rental Cost: Rs. " + totalCost)