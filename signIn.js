import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCKR8lXVOKiRNDOz5jq5BAyj_h9gfeSbTM",
  authDomain: "pawfect-home.firebaseapp.com",
  projectId: "pawfect-home",
  storageBucket: "pawfect-home.appspot.com",
  messagingSenderId: "483821780893",
  appId: "1:483821780893:web:c14212091a3cc615fe3974",
  measurementId: "G-2147LXPH74"

};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

document.getElementById('SignIn').addEventListener('click', login);

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('User Logged In!!');
      window.location.href = 'Home.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.error(`Error [${errorCode}]: ${errorMessage}`);
    });
}
