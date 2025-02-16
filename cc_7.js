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

