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
    myTimeout4 = setTimeout(myGreeting4, 8000);
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



