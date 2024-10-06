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

let btn = document.querySelector('#questionBtn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const Name = document.getElementById("questionName").value;
  const email = document.getElementById("questionEmail").value;
  const msg = document.getElementById("questionMessage").value;
  set(ref(db, 'Questions/' + Name), {
    Name: Name,
    email: email,
    Question: msg
  }).then(() => {
    alert("Question submitted successfully!");
  }).catch((error) => {
    console.error("Failed to submit:", error);
    alert("Failed to submit: " + error.message);
  });
})