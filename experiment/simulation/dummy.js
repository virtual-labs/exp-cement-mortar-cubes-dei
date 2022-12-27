// function step10(){
//   document.getElementById("Step10").style.visibility = "visible";
//   document.getElementById("Step9").style.visibility="hidden";
//   document.getElementById("next8").style.visibility="hidden";
//   document.getElementById("gif12").style.visibility="hidden";
//   document.getElementById("png9").style.visibility="hidden";
//   document.getElementById("trans13").style.visibility="hidden";

// }

function funst10() {
  document.getElementById("gif13").style.visibility = "visible";
  document.getElementById("png10").style.visibility = "hidden";
  document.getElementById("trans14").style.visibility = "hidden";
  document.getElementById("arr14").style.visibility = "hidden";
  myTimeout12 = setTimeout(myGreeting12, 25000);


}
function myGreeting12() {
  document.getElementById("next9").style.visibility = "visible";
  myStopFunction();
}
function myStopFunction() {
  clearTimeout(myTimeout12);
}

function cube1() {
  document.getElementById("png18").style.animationPlayState = "running";
  document.getElementById("png18").style.animationIterationCount = "1";
  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}


function cube2() {
  document.getElementById("png17").style.animationPlayState = "running";
  document.getElementById("png17").style.animationIterationCount = "1";
  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function cube3() {
  document.getElementById("png16").style.animationPlayState = "running";
  document.getElementById("png16").style.animationIterationCount = "1";
  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function cube4() {
  document.getElementById("png15").style.animationPlayState = "running";
  document.getElementById("png15").style.animationIterationCount = "1";
  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function cube5() {
  document.getElementById("png14").style.animationPlayState = "running";
  document.getElementById("png14").style.animationIterationCount = "1";
  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function cube6() {
  document.getElementById("png13").style.animationPlayState = "running";
  document.getElementById("png13").style.animationIterationCount = "1";
  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function newGif1() {
  document.getElementById("newGif1").style.visibility = "hidden";
  document.getElementById("newGif2").style.visibility = "visible";
  document.getElementById("nextStep1").style.visibility = "hidden"
  document.getElementById("textArea").innerHTML = "0.0 N/mm";
}

function newGif2(){
  document.getElementById("newGif3").style.visibility = "visible";
  document.getElementById("next9").style.visibility = "visible";
}