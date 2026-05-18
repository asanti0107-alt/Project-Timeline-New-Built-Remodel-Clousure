let vendors = JSON.parse(localStorage.getItem("vendors")) || [];

loadVendor();

function saveVendor(){

    const vendor =
        document.getElementById("vendorName").value;

    vendors.push(vendor);

    localStorage.setItem(
        "vendors",
        JSON.stringify(vendors)
    );

    loadVendor();

}

function loadVendor(){

    const ul =
        document.getElementById("vendorList");

    ul.innerHTML = "";

    vendors.forEach(vendor => {

        ul.innerHTML += `
            <li>${vendor}</li>
        `;

    });

}