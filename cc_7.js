//Task 1: Customer Invoice Calculation - Function Declaration
//Write a function calculateInvoice(subtotal, taxRate, discount) that calculates the final invoice amount.
function calculateInvoice(subtotal, taxRate, discount) {
    let totalInvoice = (subtotal +(subtotal * taxRate)) - discount; //Formula to calculate the final total invoice.
    return `Total Invoice: $${totalInvoice.toFixed(2)}`; //Return the total invoice with 2 decimal places.
};
//Log the results with the given data.
console.log(calculateInvoice(100, 0.08, 5)); //Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); //Expected output: "Total Invoice: $530.00"


//Task 2: Employee Hourly Wage Calculation - Function Expression
//Declare a function expression calculateHourlyWage(salary, hoursPerWeek) that calculates hourly wage.
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); //Formula to calculate the hourly wage.
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`; //Return the hourly wage with 2 decimal places.
};
//Log the results with the given data.
console.log(calculateHourlyWage(52000, 40)); //Expected output: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); //Expected output: "Hourly Wage: $41.21"


//Task 3: Customer Loyalty Discount - Arrow Function
//Write an arrow function calculateLoyaltyDiscount(amount, years) that applies a discount based on the number of years.
const calculateLoyalDiscount = (amount, years) => {
    let discountRate = 0;
    if (years >= 5) {
        discountRate = 0.15; //15% discount for 5 or more years.
    } else if (years >= 3 ) {
        discountRate = 0.1; //10% discount for 3 or more years.
    } else {
        discountRate = 0.05; //5% discount for less than 3 years.
    };
    let discountedPrice = amount * (1 - discountRate); //Formula to calculate the discounted price.
    return `Discounted Price: $${discountedPrice.toFixed(2)}`; //Return the discounted price with 2 decimal places.
};
//Log the results with the given data.
console.log(calculateLoyalDiscount(100, 6)); //Expected output: "Discounted Price: $85.00"
console.log(calculateLoyalDiscount(200, 2)); //Expected output: "Discounted Price: $190.00"


//Task 4: Product Shipping Cost Calculation - Parameters and Arguments
//Write a function calculateShippingCost(weight, location, expedited = false) to calculate shipping fees.
function calculateShippingCost(weight, location, expedited = false) {
    let shippingCost = 0;
    if (location === "USA") {
        shippingCost = 5 + (weight * 0.5); //Formula to calculate the shipping cost for USA.
    } else {
        shippingCost = 10 + (weight * 0.7); //Formula to calculate the shipping cost for Canada.
    };
    if (expedited === true) {
        shippingCost += 10; //Add $10 for expedited shipping.
    };
    return `Shipping Cost: $${shippingCost.toFixed(2)}`; //Returm the shipping cost with 2 decimal places.
};
//Log the results with the given data.
console.log(calculateShippingCost(10, "USA", true)); //Expected output: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); //Expected output: "Shipping Cost: $13.50"


//Task 5: Business Loan Interest Calculation - Returning Values
//Write a function calculateLoanInterest(principal, rate, years) that returns total interest.
function calculateLoanInterest(principal, rate, years) {
    let totalInterest = principal * rate * years; //Formula to calculate the total interest.
    return `Total Interest: $${totalInterest.toFixed(2)}`; //Return the total interest with 2 decimal places.
};
//Log the results with the given data.
console.log(calculateLoanInterest(1000, 0.05, 3)); //Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); //Expected output: "Total Interest: $1750.00"


//Task 6: Filtering High-Value Transactions - Higher-Order Functions
//Declare an array transactions with at least five amounts.
let transactions = [500, 1200, 3000, 800, 2200];
//Write a higher-order function filterHighValueTransactions(transactions, filterFunction) that filters transactions above $1000.
function filterHighValueTransactions(transactions, filterFunction) {
    let highValueTransactions = transactions.filter(filterFunction); //Filter transactions based on the filter function.
    return `High Value Transactions: ${highValueTransactions.join(", ")}`; //Return the high value transactions with a coma and a space as the separator by using .join() method.
};
//Log the result with the given data.
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); //Expected output: High Value Transactions: 1200, 3000, 2200"


//Task 7: Budget Tracker - Closures
//Write a function createBudgetTracker() that returns another function to add expenses and keep a running balance.
function createBudgetTracker() {
    let currentBalance = 0; //Intialize the current balance.
    return function(balance) { //Returns a function that takes a balance as an argument.
        currentBalance -= balance; //Substract the balance from the current balance.
        return `Current Balance: -$${Math.abs(currentBalance)}`; //Return the current balance using math.abs() method with a negative sign to show the overdrawn balance.
    };
};
//Log the results with the given data.
let budget = createBudgetTracker();
console.log(budget(300)); //Expected output: "Current Balance: -$300"
console.log(budget(200)); //Expected output: "Current Balance: -$500"



