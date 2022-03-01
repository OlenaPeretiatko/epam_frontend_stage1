// Your code goes here

const initialAmount = prompt('Please, input initial amount of money');
const numOfYears = prompt('Please, input number of years');
const perOfYears = prompt('Please, percentage of year');

if (isNaN(initialAmount) || isNaN(numOfYears) || isNaN(perOfYears ||
    initialAmount < 1000 || numOfYears < 1 || perOfYears > 100)) {
    alert('Invalid input data');
} else {

    let totalAmount = parseFloat(initialAmount);
    let profit = 0;
    for (let i = 1; i <= numOfYears; i++) {
        profit = totalAmount * perOfYears / 100;
        totalAmount += profit;

        console.log(profit.toFixed(2))
        console.log('Total amount ' + totalAmount.toFixed(2));
        console.log('Total profit ' + (totalAmount - initialAmount).toFixed(2));
    }

    alert('\nInitial amount: ' + initialAmount +
        '\nNumber of years: ' + numOfYears +
        '\nPercentage of year: ' + perOfYears +
        '\n\nTotal profit: ' + (totalAmount - initialAmount).toFixed(2) +
        '\nTotal amount: ' + totalAmount.toFixed(2));

}