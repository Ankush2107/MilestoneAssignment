const customer = {
    name: "Ankush",
    balance: 1000,
  
    deposit: function(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into ${this.name}'s account. New balance: ${this.balance}`);
    },
  
    withdraw: function(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient funds in ${this.name}'s account. Current balance: ${this.balance}`);
      }
    }
};
  
customer.deposit(500); 
customer.withdraw(200); 
customer.withdraw(2000); 
  