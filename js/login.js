import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginContainer = document.getElementById('loginContainer');
const createAccountContainer = document.getElementById('createAccountContainer');
const loggedInMessage = document.getElementById('loggedInMessage');

const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');

const createAccountForm = document.getElementById('createAccountForm');
const createEmail = document.getElementById('createEmail');
const createPassword = document.getElementById('createPassword');
const createAccountButton = document.getElementById('createAccountButton');

const createAccountLink = document.getElementById('createAccountLink');
const loginLink = document.getElementById('loginLink');
const logoutButton = document.getElementById('logoutButton');

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        loginContainer.style.display = 'none';
        createAccountContainer.style.display = 'none';
        loggedInMessage.style.display = 'block';
    } else {
        // User is signed out
        loginContainer.style.display = 'block';
        createAccountContainer.style.display = 'none';
        loggedInMessage.style.display = 'none';
    }
});

// Login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Login successful
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Create account form submission
createAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = createEmail.value;
    const password = createPassword.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Account creation successful
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Toggle between login and create account forms
createAccountLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.style.display = 'none';
    createAccountContainer.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.style.display = 'block';
    createAccountContainer.style.display = 'none';
});

// Logout button click event
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful
        })
        .catch((error) => {
            alert(error.message);
        });
});
