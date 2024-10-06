import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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
const db = getDatabase(app);

document.getElementById('SignUp').addEventListener('click', signUp);

function signUp() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const postalCode = document.getElementById('postalCode').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    if (firstName == '' || lastName == '' || country == '' || postalCode == '' || email == '' || password == '' || confirmPassword == '') {
        alert('Fill out all fields');
        return;
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            const userRef = ref(db, 'users/' + user.uid);
            return set(userRef, {
                firstName: firstName,
                lastName: lastName,
                country: country,
                postalCode: postalCode,
                email: email
            });
        })
        .then(() => {
            alert('User registered successfully');
            window.location.href = 'signIn.html';
        })
        .catch(error => {
            console.error('Error during user registration or database write:', error);
            alert(error.message);
        });
}
