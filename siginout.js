import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    // apiKey: "AIzaSyAA2NiEnr-SYeuS97geIPBVMX5Sr4Ftw2g",
    // authDomain: "se-project-17602.firebaseapp.com",
    // databaseURL: "https://se-project-17602-default-rtdb.asia-southeast1.firebasedatabase.app",
    // projectId: "se-project-17602",
    // storageBucket: "se-project-17602.appspot.com",
    // messagingSenderId: "552364011920",
    // appId: "1:552364011920:web:839a894996cf13d768c315"

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
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, show logged-in content and hide auth buttons
        document.querySelector('.inBtn').style.display = 'none';
        document.querySelector('.upBtn').style.display = 'none';
        document.querySelector('.outBtn').style.display = 'block';
    } else {
        document.querySelector('.outBtn').style.display = 'none';
        document.querySelector('.inBtn').style.display = 'block';
        document.querySelector('.upBtn').style.display = 'block';
    }
});