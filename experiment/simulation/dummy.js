// function step10(){
//   document.getElementById("Step10").style.visibility = "visible";
//   document.getElementById("Step9").style.visibility="hidden";
//   document.getElementById("next8").style.visibility="hidden";
//   document.getElementById("gif12").style.visibility="hidden";
//   document.getElementById("png9").style.visibility="hidden";
//   document.getElementById("trans13").style.visibility="hidden";
 
// }

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