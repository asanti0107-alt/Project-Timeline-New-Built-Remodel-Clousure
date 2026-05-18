import { auth } from './firebase-config.js';

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', async () => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert('Login Success');

        window.location.href = 'approve-quotation.html';

    } catch (error) {

        alert(error.message);

    }

});