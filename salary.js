loadSidebar("salary");

let salaries = getData("salaryExpenses");

document.getElementById("salaryForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const basic =
    Number(document.getElementById("basic").value);

    const bonus =
    Number(document.getElementById("bonus").value);

    const deduction =
    Number(document.getElementById("deduction").value);

    const netSalary =
    basic + bonus - deduction;

    salaries.push({

        id: Date.now(),

        employee:
        document.getElementById("employee").value,

        department:
        document.getElementById("department").value,

        basic: basic,

        bonus: bonus,

        deduction: deduction,

        month:
        document.getElementById("month").value,

        netSalary: netSalary

    });

    saveData("salaryExpenses", salaries);

    this.reset();

    displaySalary();
});

function deleteSalary(id) {

    salaries =
    salaries.filter(x => x.id !== id);

    saveData("salaryExpenses", salaries);

    displaySalary();
}

function displaySalary() {

    let html = "";
    let total = 0;

    salaries.forEach(x => {

        total += Number(x.netSalary);

        html += `

        <tr>

        <td>${x.employee}</td>

        <td>${x.department}</td>

        <td>${x.month}</td>

        <td>${currency(x.basic)}</td>

        <td>${currency(x.bonus)}</td>

        <td>${currency(x.deduction)}</td>

        <td>
        <strong>${currency(x.netSalary)}</strong>
        </td>

        <td>

        <button
        class="btn btn-danger"
        onclick="deleteSalary(${x.id})">

        Delete

        </button>

        </td>

        </tr>
        `;
    });

    document.getElementById("salaryTable")
    .innerHTML = html;

    document.getElementById("salaryTotal")
    .textContent = currency(total);
}

displaySalary();