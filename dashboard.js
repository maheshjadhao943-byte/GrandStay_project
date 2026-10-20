loadSidebar("dashboard");

function loadDashboard() {

    const revenue = totalOf("revenues");

    const expenses =
        totalOf("foodExpenses", "total") +
        totalOf("utilityExpenses") +
        totalOf("laundryExpenses") +
        totalOf("fuelExpenses") +
        totalOf("miscExpenses") +
        totalOf("salaryExpenses", "netSalary");

    const profit = revenue - expenses;

    document.getElementById("revenueTotal").textContent =
        currency(revenue);

    document.getElementById("expenseTotal").textContent =
        currency(expenses);

    document.getElementById("profitTotal").textContent =
        currency(profit);
}

loadDashboard();