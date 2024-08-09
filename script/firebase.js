
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBl8c_Kr0QWT0N7wWxTE8I6oINJTcr7m2c",
authDomain: "ceramichemontecatini-97490.firebaseapp.com",
databaseURL: "https://ceramichemontecatini-97490-default-rtdb.firebaseio.com",
projectId: "ceramichemontecatini-97490",
storageBucket: "ceramichemontecatini-97490.appspot.com",
messagingSenderId: "346935699431",
appId: "1:346935699431:web:696ec92f8d1df9b41ebf42",
measurementId: "G-0YMHYKYEHZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


