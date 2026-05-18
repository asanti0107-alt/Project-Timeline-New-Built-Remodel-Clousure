let quotations = JSON.parse(
) || [];

loadQuotation();

function loadQuotation(){

    const tbody =
        document.getElementById("quotationTable");

    tbody.innerHTML = "";

    quotations.forEach(item => {

        tbody.innerHTML += `

            <tr>

                <td>${item.quotationNo}</td>
                <td>${item.vendor}</td>
                <td>${item.storeName}</td>
                <td>${item.status}</td>
                <td>${item.grandTotal}</td>

            </tr>

        `;

    });

}

function goDashboard(){

    window.location.href =
        "dashboard.html";

}

// ==================================
// Export CSV
// ==================================

function exportCSV(){

    let csv =
        "Quotation No,Vendor,Store,Status,Total\n";

    quotations.forEach(item => {

        csv +=
            `${item.quotationNo},` +
            `${item.vendor},` +
            `${item.storeName},` +
            `${item.status},` +
            `${item.grandTotal}\n`;

    });

    const blob =
        new Blob([csv], { type: 'text/csv' });

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "quotation-status.csv";

    link.click();

}