// Step1
function step2(){
    document.getElementById("Step1").style.visibility="hidden";
    document.getElementById("next").style.visibility="hidden";
    document.getElementById("Step2").style.visibility="visible";
   
}

// Step2
function moveplate(){
    document.getElementById("png1").style.visibility="hidden";
    document.getElementById("trans1").style.visibility="hidden";
    document.getElementById("arr1").style.visibility="hidden";
    document.getElementById("gif1").style.visibility="visible";
    
    myTimeout = setTimeout(myGreeting, 6000);
}

function moveplate1(){
    document.getElementById("gif1").style.visibility="hidden";
    document.getElementById("trans2").style.visibility="hidden";
    document.getElementById("arr2").style.visibility="hidden";
    document.getElementById("gif2").style.visibility="visible";
   
    myTimeout1 = setTimeout(myGreeting1, 6000);
}


function moveplate2(){
    document.getElementById("gif2").style.visibility="hidden";
    document.getElementById("trans3").style.visibility="hidden";
    document.getElementById("gif3").style.visibility="visible";
    document.getElementById("arr3").style.visibility="hidden";
    
    myTimeout2 = setTimeout(myGreeting2, 6000);
}

function moveplate3(){
    document.getElementById("gif3").style.visibility="hidden";
    document.getElementById("trans4").style.visibility="hidden";
    document.getElementById("gif4").style.visibility="visible";
    document.getElementById("arr4").style.visibility="hidden";
    myTimeout3 = setTimeout(myGreeting3, 6000);
}

// time delay function
function myGreeting() {
    document.getElementById("arr2").style.visibility = "visible";
    document.getElementById("trans2").style.visibility="visible";
   

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}

function myGreeting1() {
    document.getElementById("arr3").style.visibility = "visible";
    document.getElementById("trans3").style.visibility="visible";
   

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout1);

}

function myGreeting2() {
    document.getElementById("arr4").style.visibility = "visible";
    document.getElementById("trans4").style.visibility="visible";
   

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout2);

}

function myGreeting3() {
    document.getElementById("next1").style.visibility = "visible";
   

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout3);

}

// Step3
function step3(){
    document.getElementById("Step3").style.visibility = "visible";
    document.getElementById("Step2").style.visibility="hidden";
    document.getElementById("next1").style.visibility="hidden";
    document.getElementById("gif4").style.visibility="hidden";
   
}

document.getElementById("gif5").style.display="none";

document.getElementById("trans5").onclick=function()
{
    document.getElementById("png2").style.display="none";
    document.getElementById("gif5").style.display="block";
    document.getElementById("trans5").style.display="none";
    document.getElementById("arr5").style.display="none";
    myTimeout4 = setTimeout(myGreeting4, 7000);
    // myTimeout1 = setTimeout(myGreeting1, 12000);
    // myTimeout2 = setTimeout(myGreeting2, 17000);
}
function myGreeting4()
     {
    document.getElementById("next2").style.visibility="visible";
    myStopFunction();
  }
function myStopFunction() {
    clearTimeout(myTimeout4);  
}


// Step4

function step4(){
    document.getElementById("Step4").style.visibility = "visible";
    document.getElementById("Step3").style.visibility="hidden";
    document.getElementById("next2").style.visibility="hidden";
    document.getElementById("gif5").style.visibility="hidden";
   
}
document.getElementById("trans6").onclick = function () {
    debugger;
    document.getElementById("arr6").style.visibility = "hidden";
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("gif6").style.visibility = "visible";
    document.getElementById("trans8").style.visibility = "visible";
    document.getElementById("trans6").style.visibility = "hidden";
    myTimeout5 = setTimeout(myGreeting5, 2500);
    
}

document.getElementById("trans8").onclick = function () {
    document.getElementById("png4").style.visibility = "visible";
    document.getElementById("arr8").style.visibility = "visible";
    document.getElementById("trans7").style.visibility = "visible";
    document.getElementById("gif6").style.visibility = "hidden";
    document.getElementById("arr7").style.visibility = "hidden";
    document.getElementById("trans8").style.visibility = "hidden";

}

document.getElementById("trans7").onclick = function () {
    document.getElementById("numpadbig").style.visibility = "visible";
    document.getElementById("arr8").style.visibility = "hidden";


}




function tunnu() {
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantity").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 90) {
        document.getElementById("numoutnext").innerHTML = "";
        document.getElementById("gif7").style.visibility = "visible";
        document.getElementById("numpadbig").style.visibility = "hidden";
        myTimeout6 = setTimeout(myGreeting6, 9000);
    }

    else {
        document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>is 90gm for speciman";

    }

}

function myGreeting5() {
    document.getElementById("arr7").style.visibility = "visible";
    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout5);


}
function myGreeting6() {
    document.getElementById("next3").style.visibility = "visible";
    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout6);



}

// Step5

function step5(){
    document.getElementById("Step5").style.visibility = "visible";
    document.getElementById("Step4").style.visibility="hidden";
    document.getElementById("next3").style.visibility="hidden";
    document.getElementById("gif7").style.visibility="hidden";
    document.getElementById("png4").style.visibility="hidden";
    document.getElementById("trans7").style.visibility="hidden";
   
}

function funst5(){
    document.getElementById("gif8").style.visibility="visible";
    document.getElementById("png5").style.visibility="hidden";
    document.getElementById("trans9").style.visibility="hidden";
    document.getElementById("arr9").style.visibility="hidden";
    myTimeout7 = setTimeout(myGreeting7, 10000);


}
function myGreeting7()
     {
    document.getElementById("next4").style.visibility="visible";
    myStopFunction();
  }
function myStopFunction() {
    clearTimeout(myTimeout7);  
}

// Step 6

function step6(){
    document.getElementById("Step6").style.visibility = "visible";
    document.getElementById("Step5").style.visibility="hidden";
    document.getElementById("next4").style.visibility="hidden";
    document.getElementById("gif8").style.visibility="hidden";
    document.getElementById("png4").style.visibility="hidden";
    document.getElementById("trans9").style.visibility="hidden";
   
}

function funst6(){
    document.getElementById("gif9").style.visibility="visible";
    document.getElementById("png6").style.visibility="hidden";
    document.getElementById("trans10").style.visibility="hidden";
    document.getElementById("arr10").style.visibility="hidden";
    myTimeout8 = setTimeout(myGreeting8, 8000);


}
function myGreeting8()
     {
    document.getElementById("next5").style.visibility="visible";
    myStopFunction();
  }
function myStopFunction() {
    clearTimeout(myTimeout8);  
}


// Step7


function step7(){
    document.getElementById("Step7").style.visibility = "visible";
    document.getElementById("Step6").style.visibility="hidden";
    document.getElementById("next5").style.visibility="hidden";
    document.getElementById("gif9").style.visibility="hidden";
    document.getElementById("png6").style.visibility="hidden";
    document.getElementById("trans10").style.visibility="hidden";
   
}

function funst7(){
    document.getElementById("gif10").style.visibility="visible";
    document.getElementById("png7").style.visibility="hidden";
    document.getElementById("trans11").style.visibility="hidden";
    document.getElementById("arr11").style.visibility="hidden";
    myTimeout9 = setTimeout(myGreeting9, 22000);


}
function myGreeting9()
     {
    document.getElementById("next6").style.visibility="visible";
    myStopFunction();
  }
function myStopFunction() {
    clearTimeout(myTimeout9);  
}

// Step8

function step8(){
    document.getElementById("Step8").style.visibility = "visible";
    document.getElementById("Step7").style.visibility="hidden";
    document.getElementById("next6").style.visibility="hidden";
    document.getElementById("gif10").style.visibility="hidden";
    document.getElementById("png7").style.visibility="hidden";
    document.getElementById("trans11").style.visibility="hidden";
   
}

function funst8(){
    document.getElementById("gif11").style.visibility="visible";
    document.getElementById("png8").style.visibility="hidden";
    document.getElementById("trans12").style.visibility="hidden";
    document.getElementById("arr12").style.visibility="hidden";
    myTimeout10 = setTimeout(myGreeting10, 8000);


}
function myGreeting10()
     {
    document.getElementById("next7").style.visibility="visible";
    myStopFunction();
  }
function myStopFunction() {
    clearTimeout(myTimeout10);  
}

// Step9

function step9(){
    document.getElementById("Step9").style.visibility = "visible";
    document.getElementById("Step8").style.visibility="hidden";
    document.getElementById("next7").style.visibility="hidden";
    document.getElementById("gif11").style.visibility="hidden";
    document.getElementById("png8").style.visibility="hidden";
    document.getElementById("trans12").style.visibility="hidden";
   
}

function funst9(){
    document.getElementById("gif12").style.visibility="visible";
    document.getElementById("png9").style.visibility="hidden";
    document.getElementById("trans13").style.visibility="hidden";
    document.getElementById("arr13").style.visibility="hidden";
    myTimeout11 = setTimeout(myGreeting11, 12000);


}
function myGreeting11()
     {
    document.getElementById("next8").style.visibility="visible";
    myStopFunction();
  }
function myStopFunction() {
    clearTimeout(myTimeout11);  
}

// Step10

function step10(){
    document.getElementById("Step10").style.visibility = "visible";
    document.getElementById("Step9").style.visibility="hidden";
    document.getElementById("next8").style.visibility="hidden";
    document.getElementById("gif12").style.visibility="hidden";
    document.getElementById("png9").style.visibility="hidden";
    document.getElementById("trans13").style.visibility="hidden";
   
}

function funst10(){
    document.getElementById("gif13").style.visibility="visible";
    document.getElementById("png10").style.visibility="hidden";
    document.getElementById("trans14").style.visibility="hidden";
    document.getElementById("arr14").style.visibility="hidden";
    myTimeout12 = setTimeout(myGreeting12, 25000);


}
function myGreeting12()
     {
    document.getElementById("next9").style.visibility="visible";
    myStopFunction();
  }
function myStopFunction() {
    clearTimeout(myTimeout12);  
}

// Step11
function step11(){
    document.getElementById("Step11").style.visibility = "visible";
    document.getElementById("Step10").style.visibility="hidden";
    document.getElementById("next9").style.visibility="hidden";
    document.getElementById("gif13").style.visibility="hidden";
    document.getElementById("png10").style.visibility="hidden";
    document.getElementById("trans14").style.visibility="hidden";
   
}

var age = 0;
var logo = 0;
function agesizeIn() {

    age = document.getElementById("ageIn").value;


    if (age !== "") {

        var date1 = new Date(age);
        // var today = new Date();


        logo = new Date(date1);

        //Month Print
        document.getElementById("demo").innerHTML = logo.getMonth() + 1;
        //Date Print
        document.getElementById("demo2").innerHTML = logo.getDate();
        //Year Print

        //-----------------------------------------------
        document.getElementById("cube").style.visibility = "visible";

        document.getElementById("cubedatehidden").style.visibility = "visible";
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("in2").style.visibility = "hidden";


    }

    else {
        document.getElementById("fillBox").innerHTML = "Please Enter Date";
        //alert("Wrong");

    }
}

