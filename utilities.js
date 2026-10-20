loadSidebar("utilities");

let utilities = getData("utilityExpenses");

document.getElementById("utilityForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    utilities.push({

        id: Date.now(),

        type:
        document.getElementById("type").value,

        month:
        document.getElementById("month").value,

        amount:
        Number(document.getElementById("amount").value),

        dueDate:
        document.getElementById("dueDate").value,

        status:
        document.getElementById("status").value

    });

    saveData("utilityExpenses", utilities);

    this.reset();

    displayUtilities();
});

function deleteUtility(id) {

    utilities =
    utilities.filter(x => x.id !== id);

    saveData("utilityExpenses", utilities);

    displayUtilities();
}

function displayUtilities() {

    let html = "";
    let total = 0;

    utilities.forEach(x => {

        total += Number(x.amount);

        html += `

        <tr>

        <td>${x.type}</td>
        <td>${x.month}</td>
        <td>${currency(x.amount)}</td>
        <td>${x.dueDate}</td>
        <td>${x.status}</td>

        <td>

        <button
        class="btn btn-danger"
        onclick="deleteUtility(${x.id})">

        Delete

        </button>

        </td>

        </tr>
        `;
    });

    document.getElementById("utilityTable")
    .innerHTML = html;

    document.getElementById("utilityTotal")
    .textContent = currency(total);
}

displayUtilities();