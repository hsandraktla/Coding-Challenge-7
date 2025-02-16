//Task 1
//Write a function calculateInvoice(subtotal, taxRate, discount) that calculates the final invoice amount.
function calculateInvoice(subtotal, taxRate, discount) {
    let totalInvoice = (subtotal +(subtotal * taxRate)) - discount; //Formula to calculate the final total invoice.
    return `Total Invoice: $${totalInvoice.toFixed(2)}`; //Return the total invoice with 2 decimal places.
};
//Log the results with the given data.
console.log(calculateInvoice(100, 0.08, 5)); //Expected output: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); //Expected output: "Total Invoice: $530.00"
