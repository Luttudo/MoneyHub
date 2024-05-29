
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAva5fyh1j5_SnLZVYu3F1EnW7lh4YPSTo",
  authDomain: "moneyhub-f2246.firebaseapp.com",
  projectId: "moneyhub-f2246",
  storageBucket: "moneyhub-f2246.appspot.com",
  messagingSenderId: "611591284009",
  appId: "1:611591284009:web:cb7829aa12bba14b41c338",
  measurementId: "G-FD8648FGE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const email = document.getElementById('floatingInput').value;
const password = document.getElementById('floatingPassword').value;

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()
  ElementInternals(5)
})

      








/*
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"></script>

function signIn() {
  const email = document.getElementById("floatingInput").value;
  const password = document.getElementById("floatingPassword").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuário autenticado com sucesso
      const user = userCredential.user;
      console.log("Usuário autenticado:", user);
      // Redirecione para a página desejada
    })
    .catch((error) => {
      // Trate erros de autenticação
      console.error("Erro ao autenticar:", error.message);
    });
}
*/