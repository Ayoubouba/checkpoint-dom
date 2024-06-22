//script for btn 
let heart_btn=document.getElementsByClassName("btn");
let quant=document.getElementsByClassName("Quant");
let plus_btn=document.getElementsByClassName("plus-btn");
let minus_btn=document.getElementsByClassName("minus-btn");
let deletee_btn=document.getElementsByClassName("delete");
let div=document.getElementsByClassName("Item");
let totat=document.getElementById("finalPrice");
let prices=[1379,176,249];
for(let i=0;i<heart_btn.length;i++){
    heart_btn[i].addEventListener("click",function(){
        if(heart_btn[i].style.color=="black"){
            heart_btn[i].style.color="red";
        }
        else{
            heart_btn[i].style.color="black";
        }
    })
    plus_btn[i].addEventListener("click",function(){
        quant[i].value=Number(quant[i].value)+1;
        totat.value=Number(totat.value)+prices[i];
    })
    minus_btn[i].addEventListener("click",function(){
        if(Number(quant[i].value)>1){
            quant[i].value=Number(quant[i].value)-1;
            totat.value=Number(totat.value)-prices[i];
        }
    })
    deletee_btn[i].addEventListener("click",function(){
        div[i].style.display='none';
        totat.value=Number(totat.value)-(prices[i]*Number(quant[i].value));
    })
}
// fin de btn