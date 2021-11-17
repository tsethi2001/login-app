// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh9kbGEwMmc8YknTETq56AFjYJ8xZtsTQ",
  authDomain: "login-app00.firebaseapp.com",
  projectId: "login-app00",
  storageBucket: "login-app00.appspot.com",
  messagingSenderId: "758007652000",
  appId: "1:758007652000:web:6982d9f7d4539ddad733c5"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
app = firebase.app()
}
const auth= firebase.auth();
export {auth};