function calculateBill(dishCosts, numPeople) {
    const totalBill = dishCosts.reduce((sum, cost) => sum + cost, 0);
    const billPerPerson = totalBill / numPeople;
  
    const billDetails = {
      totalBill: totalBill,
      billPerPerson: billPerPerson,
    };
  
    return billDetails;
}

const costs = [15.99, 9.99, 12.99, 8.99];
const people = 4;

const bill = calculateBill(costs, people);
console.log(bill);