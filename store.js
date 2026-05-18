let stores = JSON.parse(localStorage.getItem("stores")) || [];

loadStore();

function saveStore(){

    const text =
        document.getElementById("storeInput").value;

    const lines = text.split("\n");

    lines.forEach(line => {

        const splitData = line.split(",");

        if(splitData.length >= 2){

            stores.push({

                storeId:
                    splitData[0].trim(),

                storeName:
                    splitData[1].trim()

            });

        }

    });

    localStorage.setItem(
        "stores",
        JSON.stringify(stores)
    );

    loadStore();

}

function loadStore(){

    const tbody =
        document.getElementById("storeList");

    tbody.innerHTML = "";

    stores.forEach(store => {

        tbody.innerHTML += `

            <tr>
                <td>${store.storeId}</td>
                <td>${store.storeName}</td>
            </tr>

        `;

    });

}