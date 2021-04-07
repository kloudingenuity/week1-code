class Expense {
    constructor(expenseName, amount, tax) {
        this.expenseName = expenseName;
        this.amount = amount;
        this.tax = tax;
    }

    getTotalCost() {
        return this.amount + this.tax;
    }
}

const printerExpenseData = ['Printer toner', 50, 5];
const printerExpense = new Expense(...printerExpenseData);
// const printerExpense = new Expense('Printer toner', 50, 5);

console.log(`
Total cost of the ${printerExpense.expenseName} is $${printerExpense.getTotalCost()}
`);