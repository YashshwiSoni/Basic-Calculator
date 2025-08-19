const yresultbox = document.getElementById("result");
const ydeleteleft = document.getElementById("delete-left");
const yprsnt = document.getElementById("percent");
const ybracket = document.getElementById("bracket");
const ydeleteall = document.getElementById("clear");
const yresultbttn = document.getElementById("equals");

const ynumbers = document.querySelectorAll(".numbtn:not(#delete-left)");
const ymodifyer = document.querySelectorAll(".btn");
// const yresulttools = document.querySelectorAll(".rsltbtn");

let expresion = "";
let opningbrac = true;

ynumbers.forEach(function (bttn){
    bttn.addEventListener("click", function(){
    expresion += bttn.textContent;
    yresultbox.value = expresion;
});
});

ymodifyer.forEach(function(bttn){
bttn.addEventListener("click",function(){
    let optr = bttn.textContent;
    if(optr === "x"){
        optr = "*";
    }

    expresion += optr;
    yresultbox.value = expresion;
});
});

ydeleteleft.addEventListener("click", function(){
    expresion = expresion.slice(0,-1);
    yresultbox.value = expresion;
});

yprsnt.addEventListener("click",function(){
    expresion += "/100";
    yresultbox.value = expresion;
})


ybracket.addEventListener("click",function(){
    if(opningbrac){
        expresion += "(";
    }else{
        expresion += ")";
    }

    opningbrac = !opningbrac;
    yresultbox.value = expresion;
});

ydeleteall.addEventListener("click",function(){
    expresion = "";
    yresultbox.value = expresion;
});

yresultbttn.addEventListener("click",function(){
    try{
        let rslt = eval(expresion);
        yresultbox.value = rslt;
        expresion = rslt.toString();
    }catch(err){
        yresultbox.value = "Error";
    }
});

document.addEventListener("keydown",function(press){
   const allowedkey = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','(',')','.','%'];
    if(allowedkey.includes(press.key)){
    expresion += press.key;
    yresultbox.value = expresion;
    }
    else if(press.key ==='Backspace'){
    expresion = expresion.slice(0,-1);
    yresultbox.value = expresion;
    }
    else if(press.key ==='Enter'){
        try{
        let rslt = eval(expresion);
        yresultbox.value = rslt;
        expresion = rslt.toString();
        }catch(err){
        yresultbox.value = "Error";
        }
    }
    else if(press.key ==='Delete'){
        expresion = "";
        yresultbox.value = expresion;
    }
    else{
        press.preventDefault();
    }
});