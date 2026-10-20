function loadSidebar(activePage = "") {

    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = `
        <div class="logo">
            <h2>🏨 GrandStay</h2>
            <p>Hotel Management</p>
        </div>

        <div class="menu">

            <a href="index.html"
               class="${activePage === "dashboard" ? "active" : ""}">
               🏠 Dashboard
            </a>

            <a href="food.html"
               class="${activePage === "food" ? "active" : ""}">
               🍽 Food & Raw Material
            </a>

            <a href="utilities.html"
               class="${activePage === "utilities" ? "active" : ""}">
               ⚡ Utilities & Rent
            </a>

            <a href="laundry.html"
               class="${activePage === "laundry" ? "active" : ""}">
               🔧 Laundry & Repairs
            </a>

            <a href="fuel.html"
               class="${activePage === "fuel" ? "active" : ""}">
               ⛽ Fuel & Gas
            </a>

            <a href="misc.html"
               class="${activePage === "misc" ? "active" : ""}">
               📡 Internet & Misc
            </a>

            <a href="roster.html"
               class="${activePage === "roster" ? "active" : ""}">
               📅 Duty & Shift
            </a>

            <a href="salary.html"
               class="${activePage === "salary" ? "active" : ""}">
               💰 Salary & Payroll
            </a>

            <a href="revenue.html"
               class="${activePage === "revenue" ? "active" : ""}">
               💳 Revenue
            </a>

            <a href="profit.html"
               class="${activePage === "profit" ? "active" : ""}">
               ⚖ Profit & Loss
            </a>

        </div>
    `;
}

function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function currency(value) {
    return "₹" + Number(value || 0).toLocaleString("en-IN");
}

function totalOf(key, property = "amount") {

    const data = getData(key);

    return data.reduce((total, item) => {
        return total + Number(item[property] || 0);
    }, 0);
}