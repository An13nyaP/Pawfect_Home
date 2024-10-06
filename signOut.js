import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCKR8lXVOKiRNDOz5jq5BAyj_h9gfeSbTM",
    authDomain: "pawfect-home.firebaseapp.com",
    projectId: "pawfect-home",
    storageBucket: "pawfect-home.appspot.com",
    messagingSenderId: "483821780893",
    appId: "1:483821780893:web:c14212091a3cc615fe3974",
    measurementId: "G-2147LXPH74"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector('.outBtn').addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('User logged out');
    }).catch((error) => {
        console.error('Error logging out:', error);
        alert(error.message);
    });
});