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