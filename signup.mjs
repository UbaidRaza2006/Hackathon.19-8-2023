import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore, addDoc,collection } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-storage.js";
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
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
  const db = getFirestore(app)
  const auth = getAuth(app);
const storage = getStorage(app);

  // var btn1 =document.getElementById("btn").addEventListener('click',signup)
  
  // var  btn= document.getElementById("btn")
  async function  signup ()
  
  {
    console.log("jdhjkdab");
    var fname=document.getElementById("fname").value
    var lname=document.getElementById("lname").value

    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var file=document.getElementById("file").files[0]
    // console.log(email,password);
    // var phone=document.getElementById("phone").value
    // var address=document.getElementById("address").value
    // var country=document.getElementById("country").value

    try {
      const docRef = await addDoc(collection(db, "Users"), {
          fname: fname,
          lname: lname,
          Email: email,
          password:password,
          
      });
      console.log("Users Collection ID: ", docRef.id);
  } catch (e) {
      console.error("Users Collection Error --> ", e);
  }

 

// const storageRef = ref(storage, 'Files');

// // 'file' comes from the Blob or File API
// uploadBytes(storageRef, file).then((snapshot) => {
//   console.log('Uploaded a blob or file!');
// });
    
    createUserWithEmailAndPassword(auth,email, password)
    .then(async(userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user:",user)
      alert("User Created");
      window.location.href="login.html"
      
      // firestore ka code he 
      
      // try {
      //   const docRef = await addDoc(collection(db, "users"), {
      //   //  Email:email,
      //   //  Password:password
      //   name:"jnasdnsa"
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
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