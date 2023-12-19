     document.getElementById("sign").addEventListener("click", function(){
            window.location = "signup.html";
        })
        document.getElementById("login").addEventListener("click", function(){
            window.location = "login.html";
        })
        window.onload = function(){
var flag2 = localStorage.getItem("flag1");
console.log(flag2);
if(flag2 > 0){
    setTimeout(()=>{
        window.location = "main.html";
    },2000);
}
}
        setTimeout(()=>{
      document.getElementById("splash").classList.toggle("fade");
    },5000);
      /*  document.getElementById("skip").addEventListener("click", function(){
            window.location = "main.html";
        }) */
