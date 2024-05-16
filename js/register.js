
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBDkN1VIeUrFfWzbE5-xsHCRMrvoV7kTjI",
    authDomain: "register-auth-d4eff.firebaseapp.com",
    projectId: "register-auth-d4eff",
    storageBucket: "register-auth-d4eff.appspot.com",
    messagingSenderId: "1091219445534",
    appId: "1:1091219445534:web:d00c4613a351127cee1b0f",
    measurementId: "G-LDM5Q9E4ZT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth();
  
/*
  /* ==================== REGISTER ==================== */
  document.getElementById("register-btn").addEventListener("click", function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Registration successful");
        

        document.querySelector('.registration-form').style.display = 'none';
        const profileIcon = document.querySelector('.nav__list .nav__link:last-child i');
        profileIcon.classList.remove('ri-user-line');
        profileIcon.classList.add('ri-logout-box-r-line');

        // Hide registration form
        document.querySelector('.registration-form').style.display = 'none';
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        alert(errorMessage);
    });
});

/* ==================== LOGOUT ==================== */
const logoutIcon = document.querySelector('.nav__list .nav__link:last-child i');

const profileContainer = document.getElementById('profile-container');

logoutIcon.addEventListener('click', function(event) {
    event.stopPropagation(); 

    if (profileContainer.style.display === 'block') {
        profileContainer.style.display = 'none';
    } else {
        const userEmail = auth.currentUser ? auth.currentUser.email : "Guest";
        const userEmailElement = document.getElementById('user-email');
        const logoutButton = document.getElementById('logout-btn');
        
        userEmailElement.textContent = "Logged in as: " + userEmail;

        profileContainer.style.display = 'block';
    }
});

document.body.addEventListener('click', function() {
    profileContainer.style.display = 'none';
});

profileContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});

document.getElementById('logout-btn').addEventListener('click', function() {
    auth.signOut()
    .then(() => {
        alert("Logout successful");
    })
    .catch((error) => {
        console.error(error.message);
        alert("Logout failed");
    });
});
