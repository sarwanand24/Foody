   document.getElementById("back-arrow").addEventListener("click", function(){
            window.location = "main.html";
        })
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
        if(number == 7){
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
        else if(number == 13){
            sub_total[number] = count[number]*5;
            console.log(sub_total[number]);
        }
        else if(number == 14){
            sub_total[number] = count[number]*60;
            console.log(sub_total[number]);
        }
        else if(number == 15){
            sub_total[number] = count[number]*12;
            console.log(sub_total[number]);
        }
        else if(number == 16){
            sub_total[number] = count[number]*25;
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
    if(number == 7){
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
        else if(number == 13){
            sub_total[number] = count[number]*5;
            console.log(sub_total[number]);
        }
        else if(number == 14){
            sub_total[number] = count[number]*60;
            console.log(sub_total[number]);
        }
        else if(number == 15){
            sub_total[number] = count[number]*12;
            console.log(sub_total[number]);
        }
        else if(number == 16){
            sub_total[number] = count[number]*25;
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
}
document.getElementById("proceed").addEventListener("click", function(){
            window.location = "cart.html";
        })
