loadSidebar("profit");

const revenue =
totalOf("revenues");

const food =
totalOf("foodExpenses", "total");

const utilities =
totalOf("utilityExpenses");

const laundry =
totalOf("laundryExpenses");

const fuel =
totalOf("fuelExpenses");

const misc =
totalOf("miscExpenses");

const salary =
totalOf("salaryExpenses", "netSalary");

const expenses =
food +
utilities +
laundry +
fuel +
misc +
salary;

const profit =
revenue - expenses;

let margin = 0;

if (revenue > 0) {

    margin =
    (profit / revenue) * 100;
}

document.getElementById("revenue")
.textContent = currency(revenue);

document.getElementById("expenses")
.textContent = currency(expenses);

document.getElementById("profit")
.textContent = currency(profit);

document.getElementById("food")
.textContent = currency(food);

document.getElementById("utilities")
.textContent = currency(utilities);

document.getElementById("laundry")
.textContent = currency(laundry);

document.getElementById("fuel")
.textContent = currency(fuel);

document.getElementById("misc")
.textContent = currency(misc);

document.getElementById("salary")
.textContent = currency(salary);

document.getElementById("margin")
.textContent =
margin.toFixed(2) + "%";