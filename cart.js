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
            window.location = "main.html";
        })
           var total = document.getElementById("total");
           var submit = document.getElementById("confirm");

var sum_of_total3 = sessionStorage.getItem("sum_of_total2");
var sum_of_quant3 = sessionStorage.getItem("sum_of_quant2");
var count3 = JSON.parse(sessionStorage.getItem("count2"));
console.log(count3);
var sub_total3 = JSON.parse(sessionStorage.getItem("sub_total2"));
console.log(sub_total3);

var foodItems = [0,"Idli:", "Uttapam:", "Upma:", "Poha:", "Sandwich:", "Dosa:", "Veg Meal:", "Non-Veg Meal:", "Veg Fried Rice:", "Paneer Butter Masala:", "Kadhai Paneer:", "Chilli Paneer:", "Tawa Roti:", "Chicken Curry:", "Egg Curry:", "Fish Curry:", "Bengali Thali:", "Tawa Roti:", "Tandoori Roti:", "Tandoori Roti Butter:", "Chana Masala:", "Tarka Butter:", "Chicken Biryani Half:", "Mutton Biryani Half:", "Chicken Biryani Full:", "Mutton Biryani Full:", "Roomali Roti:", "Rajma Chawal:", "Coca Cola:", "ThumbsUp:", "Bisleri:"];
var orderedFood = [];
var dishname;
var no_of_dish;
var no_of_item = [];
total.innerHTML = sum_of_total3;
for(var i = 1; i<=31; i++){
    no_of_item[i] = document.getElementById("no-of-item"+i);
    if(count3[i] > 0){
    console.log(i);
      console.log(count3[i]);
      console.log(sub_total3[i]);
      document.getElementById("block"+i).style.display = "block";
      no_of_item[i].innerHTML = count3[i];
   }
    //**********INCREMENT FUNCTION**********
    document.getElementById("inc"+i).addEventListener("click", function(){
        console.log(this.id);
        var number = this.id.replace(/[a-z]/g,"");
        console.log(number);
        count3[number]++;
        console.log(count3[number]);
        if(number == 1 || number == 3 || number == 4){
            sub_total3[number] = count3[number]*20;
            console.log(sub_total3[number]);
        }
        else if(number == 2 || number == 5 || number == 6){
            sub_total3[number] = count3[number]*25;
            console.log(sub_total3[number]);
        }
        else if(number == 7){
            sub_total3[number] = count3[number]*65;
            console.log(sub_total3[number]);
        }
        else if(number == 8){
            sub_total3[number] = count3[number]*85;
            console.log(sub_total3[number]);
        }
        else if(number == 9 || number == 10 || number == 12 || number == 17){
            sub_total3[number] = count3[number]*90;
            console.log(sub_total3[number]);
        }
        else if(number == 11){
            sub_total3[number] = count3[number]*95;
            console.log(sub_total3[number]);
        }
        else if(number == 13 || number == 18){
            sub_total3[number] = count3[number]*5;
            console.log(sub_total3[number]);
        }
        else if(number == 14){
            sub_total3[number] = count3[number]*60;
            console.log(sub_total3[number]);
        }
        else if(number == 15 || number == 27){
            sub_total3[number] = count3[number]*12;
            console.log(sub_total3[number]);
        }
        else if(number == 16){
            sub_total3[number] = count3[number]*25;
            console.log(sub_total3[number]);
        }
        else if(number == 19){
            sub_total3[number] = count3[number]*10;
            console.log(sub_total3[number]);
        }
        else if(number == 20){
            sub_total3[number] = count3[number]*13;
            console.log(sub_total3[number]);
        }
        else if(number == 21){
            sub_total3[number] = count3[number]*45;
            console.log(sub_total3[number]);
        }
        else if(number == 23){
            sub_total3[number] = count3[number]*70;
            console.log(sub_total3[number]);
        }
        else if(number == 28){
            sub_total3[number] = count3[number]*170;
            console.log(sub_total3[number]);
        }
        else if(number == 22){
            sub_total3[number] = count3[number]*50;
            console.log(sub_total3[number]);
        }
        else if(number == 24){
            sub_total3[number] = count3[number]*80;
            console.log(sub_total3[number]);
        }
        else if(number == 25){
            sub_total3[number] = count3[number]*120;
            console.log(sub_total3[number]);
        }
        else if(number == 26){
            sub_total3[number] = count3[number]*140;
            console.log(sub_total3[number]);
        }
        else if(number == 29 || number == 30){
            sub_total3[number] = count3[number]*40;
            console.log(sub_total3[number]);
        }
        else if(number == 31){
            sub_total3[number] = count3[number]*20;
            console.log(sub_total3[number]);
        }
        no_of_item[number].innerHTML = count3[number];
        var sum_of_total = 0;
        for(var j = 1; j<=31; j++){
           sum_of_total = sum_of_total + sub_total3[j];
           console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
           console.log(count3[j]);//QUANTITY OF SEPARATE CLOTHES
           console.log(sub_total3[j]);//PRICE OF SEPARATE CLOTHES
        }
        total.innerHTML = sum_of_total;

          dishname = foodItems[number];
          no_of_dish = count3[number];
          orderedFood[number] = dishname+no_of_dish;
    })
    document.getElementById("dec"+i).addEventListener("click", function(){
    console.log(this.id);
    var number = this.id.replace(/[a-z]/g,"");
    console.log(number);
    if(count3[number] > 0){
    count3[number]--;
    }
    console.log(count3[number]);
    if(number == 1 || number == 3 || number == 4){
            sub_total3[number] = count3[number]*20;
            console.log(sub_total3[number]);
        }
        else if(number == 2 || number == 5 || number == 6){
            sub_total3[number] = count3[number]*25;
            console.log(sub_total3[number]);
        }
        else if(number == 7){
            sub_total3[number] = count3[number]*65;
            console.log(sub_total3[number]);
        }
        else if(number == 8){
            sub_total3[number] = count3[number]*85;
            console.log(sub_total3[number]);
        }
        else if(number == 9 || number == 10 || number == 12 || number == 17){
            sub_total3[number] = count3[number]*90;
            console.log(sub_total3[number]);
        }
        else if(number == 11){
            sub_total3[number] = count3[number]*95;
            console.log(sub_total3[number]);
        }
        else if(number == 13 || number == 18){
            sub_total3[number] = count3[number]*5;
            console.log(sub_total3[number]);
        }
        else if(number == 14){
            sub_total3[number] = count3[number]*60;
            console.log(sub_total3[number]);
        }
        else if(number == 15 || number == 27){
            sub_total3[number] = count3[number]*12;
            console.log(sub_total3[number]);
        }
        else if(number == 16){
            sub_total3[number] = count3[number]*25;
            console.log(sub_total3[number]);
        }
        else if(number == 19){
            sub_total3[number] = count3[number]*10;
            console.log(sub_total3[number]);
        }
        else if(number == 20){
            sub_total3[number] = count3[number]*13;
            console.log(sub_total3[number]);
        }
        else if(number == 21){
            sub_total3[number] = count3[number]*45;
            console.log(sub_total3[number]);
        }
        else if(number == 23){
            sub_total3[number] = count3[number]*70;
            console.log(sub_total3[number]);
        }
        else if(number == 28){
            sub_total3[number] = count3[number]*170;
            console.log(sub_total3[number]);
        }
        else if(number == 22){
            sub_total3[number] = count3[number]*50;
            console.log(sub_total3[number]);
        }
        else if(number == 24){
            sub_total3[number] = count3[number]*80;
            console.log(sub_total3[number]);
        }
        else if(number == 25){
            sub_total3[number] = count3[number]*120;
            console.log(sub_total3[number]);
        }
        else if(number == 26){
            sub_total3[number] = count3[number]*140;
            console.log(sub_total3[number]);
        }
        else if(number == 29 || number == 30){
            sub_total3[number] = count3[number]*40;
            console.log(sub_total3[number]);
        }
        else if(number == 31){
            sub_total3[number] = count3[number]*20;
            console.log(sub_total3[number]);
        }
        no_of_item[number].innerHTML = count3[number];
        var sum_of_total = 0;
        for(var j = 1; j<=31; j++){
           sum_of_total = sum_of_total + sub_total3[j];
           console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
           console.log(count3[j]);//QUANTITY OF SEPARATE CLOTHES
           console.log(sub_total3[j]);//PRICE OF SEPARATE CLOTHES
        }
        total.innerHTML = sum_of_total;
 
        if(count3[number] == 0){
           orderedFood[number] = null;
        }
        else if(count3[number] > 0){
          dishname = foodItems[number];
          no_of_dish = count3[number];
          orderedFood[number] = dishname+no_of_dish;
        }
        
    })

if(count3[i] > 0){
 dishname = foodItems[i];
 no_of_dish = count3[i];
orderedFood[i] = (dishname+no_of_dish);
console.log(orderedFood);
}
}

document.getElementById("confirm").addEventListener("click", function(){
    var finalOrder = [];
    for(var i=1; i<=31; i++){
        if(orderedFood[i]){
            finalOrder.push(orderedFood[i]);
        }
    }
    var user3 = localStorage.getItem("user2");
    var mob3 = localStorage.getItem("mob2");
    var add3 = localStorage.getItem("add2");
    var pin3 = localStorage.getItem("pin2");

      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      var month_name;

      if( month == 1){
        month_name = "January";
      }
      else if( month == 2){
        month_name = "February";
      }
      else if( month == 3){
        month_name = "March";
      }
      else if( month == 4){
        month_name = "April";
      }
      else if( month == 5){
        month_name = "May";
      }
      else if( month == 6){
        month_name = "June";
      }
      else if( month == 7){
        month_name = "July";
      }
      else if( month == 8){
        month_name = "August";
      }
      else if( month == 9){
        month_name = "September";
      }
      else if( month == 10){
        month_name = "October";
      }
      else if( month == 11){
        month_name = "November";
      }
      else if( month == 12){
        month_name = "December";
      }
    var current_date = day+" "+month_name+" "+year;
    console.log(current_date);// CURRENT DATE TO BE PRINTED ON TOP OF DATABASE FOR CHECKING ORDERS DATE
    console.log(user3);// NAME TO BE PRINTED ON THE DATABASE
    console.log(mob3);//MOBILE NO. TO BE PRINTED ON THE DATABASE
    console.log(add3);// ADDRESS TO BE PRINTED ON THE DATABASE
    console.log(pin3);// PINCODE TO BE PRINTED ON THE DATABASE
    console.log(finalOrder);// FOOD ITEMS NAME AND QUANTITY FOR DATABASE 
    console.log(total.innerText);// TOTAL AMOUNT TO BE PRINTED ON THE DATABASE

        var j = Math.random() * 100;
            j = Math.floor(j);
            const db = getDatabase();
              set(ref(db, "Orders/"+current_date+"/"+ user3+j),{
                Mobile: mob3,//THIS STORAGE ACCESS NOT WORKING
                Address:add3,
                PinCode: pin3,
                Food_Items: finalOrder,
                Amount: total.innerText,
                 });  
                 swal({
                title: "Hurray!",
                text: "Order Confirmed!",
                icon: "success",
                button: "Next",
                });
                setTimeout(function(){
                  window.location = "main.html";  
                }, 3000);  
})
