let statuses = JSON.parse(localStorage.getItem("statuses")) || [];

loadStatus();

function saveStatus(){

    const status =
        document.getElementById("statusName").value;

    statuses.push(status);

    localStorage.setItem(
        "statuses",
        JSON.stringify(statuses)
    );

    loadStatus();

}

function loadStatus(){

    const ul =
        document.getElementById("statusList");

    ul.innerHTML = "";

    statuses.forEach(status => {

        ul.innerHTML += `
            <li>${status}</li>
        `;

    });

}