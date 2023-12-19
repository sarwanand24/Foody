       var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn'); 
let currentSlide = 1;
// Javascript for image slider manual navigation
var manualNav = function(manual){ 
slides.forEach((slide) => {
slide.classList.remove('active');
 btns.forEach((btn) => {
    btn.classList.remove('active');
    }); 
   }); 
   slides[manual].classList.add('active'); 
   btns[manual].classList.add('active'); }
    btns.forEach((btn, i) => { btn.addEventListener("click", () => {
        manualNav(i); 
        currentSlide = i; 
       });
        }); 
// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
let active = document.getElementsByClassName('active'); 
let i = 1;
var repeater = () => { setTimeout(function(){ 
[...active].forEach((activeSlide) => { 
   activeSlide.classList.remove('active'); 
   }); 
   slides[i].classList.add('active'); 
   btns[i].classList.add('active'); 
   i++; 
   if(slides.length == i){ 
       i = 0; 
       } 
       if(i >= slides.length){ 
           return; 
           }
            repeater();
             }, 6000);
              } 
              repeater();
               }
                repeat(); 

        document.getElementById("brk").addEventListener("click", function(){
            window.location = "breakfast.html";
        })
        document.getElementById("lunch").addEventListener("click", function(){
            window.location = "lunch.html";
        })
        document.getElementById("dinner").addEventListener("click", function(){
            window.location = "dinner.html";
        })
        document.getElementById("drink").addEventListener("click", function(){
            window.location = "drinks.html";
        })

        
        function search_list(){  
            document.getElementById("content").style.display = "none";
            document.getElementById("slider").style.display = "none";
            document.getElementById("search-area").style.display = "block";
let input = document.getElementById("searchbar").value;
input=input.toLowerCase();
let x = document.getElementsByClassName("item-name");
let y = document.getElementsByClassName("block");

for (i = 0; i < x.length; i++){
 if (!x[i].innerHTML.toLowerCase().includes(input) ) {
   y[i].style.display="none";
 }
else{
 y[i].style.display="block";
}
}
}

var no_of_item = [];
var count = [];
var sub_total = [];

for(var i = 1; i<=31; i++){
    no_of_item[i] = document.getElementById("no-of-item"+i);
    count[i] = 0;
    sub_total[i] = 0;
    //**********INCREMENT FUNCTION**********
    document.getElementById("inc"+i).addEventListener("click", function(){
        console.log(this.id);
        var number = this.id.replace(/[a-z]/g,"");
        console.log(number);
        count[number]++;
        console.log(count[number]);
        if(number == 1 || number == 3 || number == 4){
            sub_total[number] = count[number]*20;
            console.log(sub_total[number]);
        }
        else if(number == 2 || number == 5 || number == 6){
            sub_total[number] = count[number]*25;
            console.log(sub_total[number]);
        }
        else if(number == 7){
            sub_total[number] = count[number]*65;
            console.log(sub_total[number]);
        }
        else if(number == 8){
            sub_total[number] = count[number]*85;
            console.log(sub_total[number]);
        }
        else if(number == 9 || number == 10 || number == 12 || number == 17){
            sub_total[number] = count[number]*90;
            console.log(sub_total[number]);
        }
        else if(number == 11){
            sub_total[number] = count[number]*95;
            console.log(sub_total[number]);
        }
        else if(number == 13 || number == 18){
            sub_total[number] = count[number]*5;
            console.log(sub_total[number]);
        }
        else if(number == 14){
            sub_total[number] = count[number]*60;
            console.log(sub_total[number]);
        }
        else if(number == 15 || number == 27){
            sub_total[number] = count[number]*12;
            console.log(sub_total[number]);
        }
        else if(number == 16){
            sub_total[number] = count[number]*25;
            console.log(sub_total[number]);
        }
        else if(number == 19){
            sub_total[number] = count[number]*10;
            console.log(sub_total[number]);
        }
        else if(number == 20){
            sub_total[number] = count[number]*13;
            console.log(sub_total[number]);
        }
        else if(number == 21){
            sub_total[number] = count[number]*45;
            console.log(sub_total[number]);
        }
        else if(number == 23){
            sub_total[number] = count[number]*70;
            console.log(sub_total[number]);
        }
        else if(number == 28){
            sub_total[number] = count[number]*170;
            console.log(sub_total[number]);
        }
        else if(number == 22){
            sub_total[number] = count[number]*50;
            console.log(sub_total[number]);
        }
        else if(number == 24){
            sub_total[number] = count[number]*80;
            console.log(sub_total[number]);
        }
        else if(number == 25){
            sub_total[number] = count[number]*120;
            console.log(sub_total[number]);
        }
        else if(number == 26){
            sub_total[number] = count[number]*140;
            console.log(sub_total[number]);
        }
        else if(number == 29 || number == 30){
            sub_total[number] = count[number]*40;
            console.log(sub_total[number]);
        }
        else if(number == 31){
            sub_total[number] = count[number]*20;
            console.log(sub_total[number]);
        }
        no_of_item[number].innerHTML = count[number];
        var sum_of_total = 0;
        var sum_of_quant = 0;
        for(var j = 1; j<=31; j++){
           sum_of_total = sum_of_total + sub_total[j];
           sum_of_quant = sum_of_quant + count[j];
           console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
           console.log(sum_of_quant);//TOTAL QUANTITY TO BE PRINTED ON BILL
           console.log(count[j]);//QUANTITY OF SEPARATE CLOTHES
           console.log(sub_total[j]);//PRICE OF SEPARATE CLOTHES
        }
        console.log(sum_of_total);
        sessionStorage.setItem("sum_of_total2", sum_of_total);
        console.log(sum_of_quant);
        sessionStorage.setItem("sum_of_quant2", sum_of_quant);
        console.log(count);
        sessionStorage.setItem("count2", JSON.stringify(count));
        console.log(sub_total);
        sessionStorage.setItem("sub_total2", JSON.stringify(sub_total));
    })

    document.getElementById("dec"+i).addEventListener("click", function(){
    console.log(this.id);
    var number = this.id.replace(/[a-z]/g,"");
    console.log(number);
    if(count[number] > 0){
    count[number]--;
    }
    console.log(count[number]);
    if(number == 1 || number == 3 || number == 4){
            sub_total[number] = count[number]*20;
            console.log(sub_total[number]);
        }
        else if(number == 2 || number == 5 || number == 6){
            sub_total[number] = count[number]*25;
            console.log(sub_total[number]);
        }
        else if(number == 7){
            sub_total[number] = count[number]*65;
            console.log(sub_total[number]);
        }
        else if(number == 8){
            sub_total[number] = count[number]*85;
            console.log(sub_total[number]);
        }
        else if(number == 9 || number == 10 || number == 12 || number == 17){
            sub_total[number] = count[number]*90;
            console.log(sub_total[number]);
        }
        else if(number == 11){
            sub_total[number] = count[number]*95;
            console.log(sub_total[number]);
        }
        else if(number == 13 || number == 18){
            sub_total[number] = count[number]*5;
            console.log(sub_total[number]);
        }
        else if(number == 14){
            sub_total[number] = count[number]*60;
            console.log(sub_total[number]);
        }
        else if(number == 15 || number == 27){
            sub_total[number] = count[number]*12;
            console.log(sub_total[number]);
        }
        else if(number == 16){
            sub_total[number] = count[number]*25;
            console.log(sub_total[number]);
        }
        else if(number == 19){
            sub_total[number] = count[number]*10;
            console.log(sub_total[number]);
        }
        else if(number == 20){
            sub_total[number] = count[number]*13;
            console.log(sub_total[number]);
        }
        else if(number == 21){
            sub_total[number] = count[number]*45;
            console.log(sub_total[number]);
        }
        else if(number == 23){
            sub_total[number] = count[number]*70;
            console.log(sub_total[number]);
        }
        else if(number == 28){
            sub_total[number] = count[number]*170;
            console.log(sub_total[number]);
        }
        else if(number == 22){
            sub_total[number] = count[number]*50;
            console.log(sub_total[number]);
        }
        else if(number == 24){
            sub_total[number] = count[number]*80;
            console.log(sub_total[number]);
        }
        else if(number == 25){
            sub_total[number] = count[number]*120;
            console.log(sub_total[number]);
        }
        else if(number == 26){
            sub_total[number] = count[number]*140;
            console.log(sub_total[number]);
        }
        else if(number == 29 || number == 30){
            sub_total[number] = count[number]*40;
            console.log(sub_total[number]);
        }
        else if(number == 31){
            sub_total[number] = count[number]*20;
            console.log(sub_total[number]);
        }
        no_of_item[number].innerHTML = count[number];
        var sum_of_total = 0;
        var sum_of_quant = 0;
        for(var j = 1; j<=31; j++){
           sum_of_total = sum_of_total + sub_total[j];
           sum_of_quant = sum_of_quant + count[j];
           console.log(sum_of_total);//TOTAL TO BE PRINTED ON THE BILL
           console.log(sum_of_quant);//TOTAL QUANTITY TO BE PRINTED ON BILL
           console.log(count[j]);//QUANTITY OF SEPARATE CLOTHES
           console.log(sub_total[j]);//PRICE OF SEPARATE CLOTHES
        }
        total.innerHTML = sum_of_total;
    })
}
document.getElementById("proceed").addEventListener("click", function(){
            window.location = "cart.html";
        })
