loadSidebar("food");

let food = getData("foodExpenses");

document.getElementById("foodForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const quantity =
        Number(document.getElementById("quantity").value);

    const price =
        Number(document.getElementById("price").value);

    food.push({

        id: Date.now(),

        item:
        document.getElementById("item").value,

        category:
        document.getElementById("category").value,

        quantity: quantity,

        unit:
        document.getElementById("unit").value,

        price: price,

        supplier:
        document.getElementById("supplier").value,

        date:
        document.getElementById("date").value,

        total: quantity * price

    });

    saveData("foodExpenses", food);

    this.reset();

    displayFood();
});

function deleteFood(id) {

    food = food.filter(item => item.id !== id);

    saveData("foodExpenses", food);

    displayFood();
}

function displayFood() {

    const table =
        document.getElementById("foodTable");

    table.innerHTML = "";

    let total = 0;

    food.forEach(item => {

        total += Number(item.total);

        table.innerHTML += `

        <tr>

        <td>${item.item}</td>

        <td>${item.category}</td>

        <td>
        ${item.quantity} ${item.unit}
        </td>

        <td>${item.supplier}</td>

        <td>${item.date}</td>

        <td>${currency(item.total)}</td>

        <td>
        <button
        class="btn btn-danger"
        onclick="deleteFood(${item.id})">
        Delete
        </button>
        </td>

        </tr>
        `;
    });

    document.getElementById("foodTotal")
    .textContent = currency(total);
}

displayFood();