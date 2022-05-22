// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH6RGjpvZnbAaL-SkTAp7UbTWPBJUYntQ",
    authDomain: "assignment-12-e077a.firebaseapp.com",
    projectId: "assignment-12-e077a",
    storageBucket: "assignment-12-e077a.appspot.com",
    messagingSenderId: "137598781180",
    appId: "1:137598781180:web:79a4481c301e9af3b8b979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth