// เปิดหน้า Add Vendor
const btnVendor = document.getElementById('btnVendor');
btnVendor.addEventListener('click', () => {
    window.location.href = 'add-vendor.html';
});

// เปิดหน้า Add Status
const btnStatus = document.getElementById('btnStatus');
btnStatus.addEventListener('click', () => {
    window.location.href = 'add-status.html';
});

// เปิดหน้า Add Store
const btnStore = document.getElementById('btnStore');
btnStore.addEventListener('click', () => {
    window.location.href = 'add-store.html';
});
// ===============================
// Load Data
// ===============================

let vendors = JSON.parse(localStorage.getItem("vendors")) || [];
let statuses = JSON.parse(localStorage.getItem("statuses")) || [];
let stores = JSON.parse(localStorage.getItem("stores")) || [];
let quotations = JSON.parse(localStorage.getItem("quotations")) || [];

// ===============================
// Initial Load
// ===============================

window.onload = () => {

    loadVendor();
    loadStatus();
    loadStore();
    addRow();

};

// ===============================
// Load Vendor
// ===============================

function loadVendor(){

    const vendorSelect =
        document.getElementById("vendor");

    vendorSelect.innerHTML = "";

    vendors.forEach(vendor => {

        vendorSelect.innerHTML += `
            <option value="${vendor}">
                ${vendor}
            </option>
        `;

    });

}

// ===============================
// Load Status
// ===============================

function loadStatus(){

    const statusSelect =
        document.getElementById("status");

    statusSelect.innerHTML = "";

    statuses.forEach(status => {

        statusSelect.innerHTML += `
            <option value="${status}">
                ${status}
            </option>
        `;

    });

}

// ===============================
// Load Store
// ===============================

function loadStore(){

    const storeSelect =
        document.getElementById("store");

    storeSelect.innerHTML = "";

    stores.forEach(store => {

        storeSelect.innerHTML += `
            <option value="${store}">
                ${store}
            </option>
        `;

    });

}

// ===============================
// Add Row
// ===============================

function addRow(){

}
import { db } from './firebase-config.js';

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const quotationForm = document.getElementById('quotationForm');

quotationForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    try {

        await addDoc(collection(db, 'quotations'), {

            vendor: document.getElementById('vendor').value,
            quotationDate: document.getElementById('quotationDate').value,
            quotationNumber: document.getElementById('quotationNumber').value,
            poNumber: document.getElementById('poNumber').value,
            poDate: document.getElementById('poDate').value,
            storeId: document.getElementById('storeId').value,
            storeName: document.getElementById('storeName').value,
            status: 'Pending',
            createdAt: serverTimestamp()

        });

        alert('Save Success');

        window.location.href = 'approve-quotation.html';

    } catch (error) {

        console.error(error);
        alert('Save Failed');

    }

});