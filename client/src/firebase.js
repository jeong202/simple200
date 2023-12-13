import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWdeJ0rRIHPdo3VjjKrr8HUGC3SGUdVgM",
    authDomain: "newreact-blog.firebaseapp.com",
    projectId: "newreact-blog",
    storageBucket: "newreact-blog.appspot.com",
    messagingSenderId: "74335248959",
    appId: "1:74335248959:web:7acc60eed03722e7f94e8a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

