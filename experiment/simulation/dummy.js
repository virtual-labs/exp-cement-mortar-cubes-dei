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
    document.getElementById("next").style.visibility = "visible";
   

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout3);

}

function step3(){
    document.getElementById("step3").style.visibility = "visible";
    document.getElementById("step2").style.visibility="hidden";
   
}