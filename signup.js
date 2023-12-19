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

        document.getElementById("back-arrow").addEventListener("click", function(){
            window.location = "index.html";
        })
    
        document.getElementById("submit").addEventListener("click", function(){
        var user = document.getElementById("nameInp");
        var mob = document.getElementById("mobInp");
        var add = document.getElementById("addInp");
        var pin = document.getElementById("pinInp");
              localStorage.setItem("user2", user.value);
              localStorage.setItem("mob2", mob.value);
              localStorage.setItem("add2", add.value);
              localStorage.setItem("pin2", pin.value);
              if(user.value!== "" && mob.value!== "" && add.value!== ""){
                var flag = 1;
              console.log(flag);
              localStorage.setItem("flag1", flag);
            var j = Math.random() * 100;
            j = Math.floor(j);
              const db = getDatabase();
              set(ref(db, "UsersList/"+ user.value+j),{
                Name: user.value,
                Mobile: mob.value,
                Address:add.value,
                PinCode: pin.value,
                 });  
                 swal({
                title: "Success!",
                text: "You Are Signed In Buddy!",
                icon: "success",
                button: "Next",
                });
                setTimeout(function(){
                  window.location = "main.html";  
                }, 2000);  
         }
    else{
        swal({
              text: "Please Fill All Fields",
             });
    }
           
        })
