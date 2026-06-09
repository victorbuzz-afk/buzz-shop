<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBk9p9BkxlEFqcICm5roPxHRo7S7LM6oW4",
    authDomain: "buzz-shop-db.firebaseapp.com",
    projectId: "buzz-shop-db",
    storageBucket: "buzz-shop-db.firebasestorage.app",
    messagingSenderId: "272341234750",
    appId: "1:272341234750:web:facaf89d31f1535deb0d6f",
    measurementId: "G-WJNEFCJDSZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>