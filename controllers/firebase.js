
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCEtmReL6NB2lszWd4-paC4-j8Ujawf5hQ",
    authDomain: "elden-ring-aa140.firebaseapp.com",
    projectId: "elden-ring-aa140",
    storageBucket: "elden-ring-aa140.appspot.com",
    messagingSenderId: "306397548040",
    appId: "1:306397548040:web:2a6d45bf196d835b068bbd",
    measurementId: "G-QEM2Q374HN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
