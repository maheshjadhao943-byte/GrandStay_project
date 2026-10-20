loadSidebar("revenue");

let revenues = getData("revenues");

document.getElementById("revenueForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    revenues.push({

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

    saveData("revenues", revenues);

    this.reset();

    displayRevenue();
});

function deleteRevenue(id) {

    revenues =
    revenues.filter(x => x.id !== id);

    saveData("revenues", revenues);

    displayRevenue();
}

function displayRevenue() {

    let html = "";
    let total = 0;

    revenues.forEach(x => {

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
        onclick="deleteRevenue(${x.id})">

        Delete

        </button>

        </td>

        </tr>
        `;
    });

    document.getElementById("revenueTable")
    .innerHTML = html;

    document.getElementById("revenueTotal")
    .textContent = currency(total);
}

displayRevenue();