
var x, y,plus,minus,divide, z,times;


 plus = "+";
minus = "-";
divide = "'/,";
times = "*";

 function justClick(){
     x = Number(document.getElementById("txt_left").value);
     y = Number(document.getElementById("txt_right").value);
    z =  x + y;
 document.getElementById("answer").value= z;
}

 function justClickI(){
     x = Number(document.getElementById("txt_left").value);
     y = Number(document.getElementById("txt_right").value);
   z =  x - y;
     document.getElementById("answer").value= z;
 }

 function justClickII(){
     x = document.getElementById("txt_left").value;
     y = document.getElementById("txt_right").value;
     z =  x / y;
     document.getElementById("answer").value= z;
 }

 function justClickIII(){
     x = document.getElementById("txt_left").value;
     y = document.getElementById("txt_right").value;
    z =  x * y;
     document.getElementById("answer").value= z;
 }

 function showPlus(){
     document.getElementById("showSign").innerHTML=plus;
     document.getElementById("addBtn").style.visibility = "visible";
     document.getElementById("minusBtn").style.visibility = "hidden";
     document.getElementById("divideBtn").style.visibility = "hidden";
     document.getElementById("timesBtn").style.visibility = "hidden";

 }

 function showMinus(){
     document.getElementById("showSign").innerHTML=minus;
     document.getElementById("minusBtn").style.visibility = "visible";
     document.getElementById("addBtn").style.visibility = "hidden";
     document.getElementById("divideBtn").style.visibility = "hidden";
     document.getElementById("timesBtn").style.visibility = "hidden";
 }

 function showDivide(){
     document.getElementById("showSign").innerHTML=divide;
     document.getElementById("divideBtn").style.visibility = "visible";
     document.getElementById("addBtn").style.visibility = "hidden";
     document.getElementById("minusBtn").style.visibility = "hidden";
     document.getElementById("timesBtn").style.visibility = "hidden";

 }

 function showTimes(){
     document.getElementById("showSign").innerHTML=times;
     document.getElementById("timesBtn").style.visibility = "visible";
     document.getElementById("addBtn").style.visibility = "hidden";
     document.getElementById("divideBtn").style.visibility = "hidden";
     document.getElementById("minusBtn").style.visibility = "hidden";

 }





