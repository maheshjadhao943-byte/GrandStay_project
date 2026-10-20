loadSidebar("roster");

let roster = getData("hotelRoster");

document.getElementById("rosterForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    roster.push({

        id: Date.now(),

        employee:
        document.getElementById("employee").value,

        department:
        document.getElementById("department").value,

        shift:
        document.getElementById("shift").value,

        date:
        document.getElementById("date").value,

        status:
        document.getElementById("status").value

    });

    saveData("hotelRoster", roster);

    this.reset();

    displayRoster();
});

function deleteRoster(id) {

    roster =
    roster.filter(x => x.id !== id);

    saveData("hotelRoster", roster);

    displayRoster();
}

function displayRoster() {

    let html = "";

    roster.forEach(x => {

        html += `

        <tr>

        <td>${x.employee}</td>
        <td>${x.department}</td>
        <td>${x.shift}</td>
        <td>${x.date}</td>
        <td>${x.status}</td>

        <td>

        <button
        class="btn btn-danger"
        onclick="deleteRoster(${x.id})">

        Delete

        </button>

        </td>

        </tr>
        `;
    });

    document.getElementById("rosterTable")
    .innerHTML = html;
}

displayRoster();