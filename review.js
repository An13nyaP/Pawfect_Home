import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
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

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let btn = document.querySelector('#reviewBtn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const Name = document.getElementById("reviewName").value;
  const msg = document.getElementById("reviewMessage").value;
  set(ref(db, 'Reviews/' + Name), {
    Name: Name,
    Message: msg
  }).then(() => {
    alert("Review submitted successfully!");
    document.getElementById("reviewName").value = '';
    document.getElementById("reviewMessage").value = '';
  }).catch((error) => {
    console.error("Failed to submit:", error);
    alert("Failed to submit: " + error.message);
  });
})