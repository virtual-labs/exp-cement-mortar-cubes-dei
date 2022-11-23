// document.getElementById("gif6").style.visibility = "hidden";
// document.getElementById("gif7").style.visibility = "hidden";
// document.getElementById("trans7").style.visibility = "hidden";
// document.getElementById("trans8").style.visibility = "hidden";
// document.getElementById("arr7").style.visibility = "hidden";
// document.getElementById("numpadbig").style.visibility = "hidden";
// document.getElementById("arr8").style.visibility = "hidden";
// document.getElementById("png1").style.visibility = "hidden";


document.getElementById("trans6").onclick = function () {
    debugger;
    document.getElementById("arr6").style.visibility = "hidden";
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("gif6").style.visibility = "visible";
    document.getElementById("trans8").style.visibility = "visible";
    document.getElementById("trans6").style.visibility = "hidden";
    myTimeout = setTimeout(myGreeting, 2500);
    
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
        myTimeout3 = setTimeout(myGreeting3, 9000);
    }

    else {
        document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>is 90gm for speciman";

    }

}

function myGreeting() {
    document.getElementById("arr7").style.visibility = "visible";
    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);


}
function myGreeting3() {
    document.getElementById("next3").style.visibility = "visible";
    myStopFunction3();
}

function myStopFunction3() {
    clearTimeout(myTimeout3);


}