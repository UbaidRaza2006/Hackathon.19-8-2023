import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
// import { collection, addDoc} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firetore.js"; 
// // import {app} from "./firebase.mjs";



  
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB-RzNx1MF098_olWGu-3nblS_p7tNdZ-0",
    authDomain: "hackathon19-8-2023.firebaseapp.com",
    projectId: "hackathon19-8-2023",
    storageBucket: "hackathon19-8-2023.appspot.com",
    messagingSenderId: "457832861614",
    appId: "1:457832861614:web:11f0174389d43b8bf4823f",
    measurementId: "G-SZLNCLGJQ1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore()
  const auth = getAuth();
  // var btn1 =document.getElementById("btn").addEventListener('click',signup)
  
  // var  btn= document.getElementById("btn")
  function signup()
  
  {
    console.log("jdhjkdab");
    // var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    // console.log(email,password);
    // var phone=document.getElementById("phone").value
    // var address=document.getElementById("address").value
    // var country=document.getElementById("country").value
    
    createUserWithEmailAndPassword(auth,email, password)
    .then(async(userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user:",user)
      alert("User Created");
      window.location.href="login.html"
      
      // firestore ka code he 
      
      try {
        const docRef = await addDoc(collection(db, "users"), {
        //  Email:email,
        //  Password:password
        name:"jnasdnsa"
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error",errorMessage);
      // ..
    });
  

}

// Firestore user getting









window.signup=signup;

  export {app,auth}

 