    // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBB_JDkRhdG1rLTwrl-RNU-DIAokK2jpuU",
    authDomain: "foody-2023.firebaseapp.com",
    projectId: "foody-2023",
    storageBucket: "foody-2023.appspot.com",
    messagingSenderId: "926171175671",
    appId: "1:926171175671:web:e9b3e53852f6205f4cd1f2",
    measurementId: "G-V93LETY3QB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

        import{ getDatabase, ref, set, child, get}
        from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

        const database = getDatabase();
        const auth = getAuth(app);

    var loginUser = document.getElementById("nameInp");
     
        document.getElementById("back-arrow").addEventListener("click", function(){
            window.location = "index.html";
        })
        document.getElementById("submit").addEventListener("click", function(){
            console.log(loginUser.value);
const dbRef = ref(getDatabase());   
get(child(dbRef, "UsersList/"+ loginUser.value)).then((snapshot)=>{    
 if (snapshot.exists()) {
    localStorage.setItem("user2", loginUser.value);
    window.location = "main.html";
 }
 else{
    swal({
              text: "User does not exists!",
             });
 }
});
        })
