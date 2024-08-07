// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export const environment = {
    production: false,
    apiKey: "AIzaSyCslREl5N9nJbYa1QLqYbPlZ3i1XsOf1VI",
    firebase: {
        apiKey: "AIzaSyCslREl5N9nJbYa1QLqYbPlZ3i1XsOf1VI",
        authDomain: "bookshelf-5d36a.firebaseapp.com",
        projectId: "bookshelf-5d36a",
        storageBucket: "bookshelf-5d36a.appspot.com",
        messagingSenderId: "298486246714",
        appId: "1:298486246714:web:39be186e29205483fc7403"
    }
};

// Initialize Firebase
const app = initializeApp(environment);