loadSidebar(PAGE_NAME);

let expenses = getData(STORAGE_KEY);

document.getElementById("expenseForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    expenses.push({

        id: Date.now(),

        type:
        document.getElementById("type").value,

        description:
        document.getElementById("description").value,

        amount:
        Number(document.getElementById("amount").value),

        date:
        document.getElementById("date").value

    });

    saveData(STORAGE_KEY, expenses);

    this.reset();

    displayExpenses();
});

function deleteExpense(id) {

    expenses =
    expenses.filter(x => x.id !== id);

    saveData(STORAGE_KEY, expenses);

    displayExpenses();
}

function displayExpenses() {

    let html = "";

    let total = 0;

    expenses.forEach(x => {

        total += Number(x.amount);

        html += `

        <tr>

        <td>${x.type}</td>

        <td>${x.description}</td>

        <td>${currency(x.amount)}</td>

        <td>${x.date}</td>

        <td>

        <button
        class="btn btn-danger"
        onclick="deleteExpense(${x.id})">

        Delete

        </button>

        </td>

        </tr>
        `;
    });

    document.getElementById("expenseTable")
    .innerHTML = html;

    document.getElementById("total")
    .textContent = currency(total);
}

displayExpenses();