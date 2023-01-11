

function cube12() {
  document.getElementById("png37").style.animationPlayState = "running";
  document.getElementById("png37").style.animationIterationCount = "1";
  document.getElementById("trans26").style.visibility = "hidden";
  document.getElementById("trans25").style.visibility = "visible";
  document.getElementById("arr26").style.visibility = "hidden";
  document.getElementById("arr25").style.visibility = "visible";
}

function cube11() {
  document.getElementById("png38").style.animationPlayState = "running";
  document.getElementById("png38").style.animationIterationCount = "1";
  document.getElementById("trans25").style.visibility = "hidden";
  document.getElementById("trans24").style.visibility = "visible";
  document.getElementById("arr25").style.visibility = "hidden";
  document.getElementById("arr24").style.visibility = "visible";
}

function cube10() {
  document.getElementById("png39").style.animationPlayState = "running";
  document.getElementById("png39").style.animationIterationCount = "1";
  document.getElementById("trans24").style.visibility = "hidden";
  document.getElementById("png44").style.visibility = "visible";
  document.getElementById("arr24").style.visibility = "hidden";
}
function cloth2() {
  document.getElementById("png44").style.animationPlayState = "running";
  document.getElementById("png44").style.animationIterationCount = "1";
  newTimeout21 = setTimeout(newGreeting21, 2000);
}

function newGreeting21() {
  document.getElementById("next13").style.visibility = "visible";
  document.getElementById("png44").style.visibility = "hidden";
}

function step16(){
  debugger;
  document.getElementById("Step15").style.visibility = "hidden";
  document.getElementById("Step16").style.visibility = "visible";

  document.getElementById("png34").style.visibility = "hidden";
  document.getElementById("png35").style.visibility = "hidden";
  document.getElementById("png36").style.visibility = "hidden";
  document.getElementById("png37").style.visibility = "hidden";
  document.getElementById("png38").style.visibility = "hidden";
  document.getElementById("png39").style.visibility = "hidden";
  // document.getElementById("png40").style.visibility = "hidden";
  // document.getElementById("png41").style.visibility = "hidden";
  // document.getElementById("png42").style.visibility = "hidden";
  document.getElementById("png43").style.visibility = "hidden";
  document.getElementById("png44").style.visibility = "hidden";
  document.getElementById("png45").style.visibility = "hidden";
  document.getElementById("png46").style.visibility = "hidden";
  document.getElementById("png47").style.visibility = "hidden";
  document.getElementById("trans24").style.zIndex = -10;
  document.getElementById("trans25").style.zIndex = -10;
  document.getElementById("trans26").style.zIndex = -10;
  document.getElementById("arr24").style.visibility = "hidden";
  document.getElementById("arr25").style.visibility = "hidden";
  document.getElementById("arr26").style.visibility = "hidden";
  document.getElementById("next13").style.visibility = "hidden";
}

function newGif10() {
  document.getElementById("newImage4").style.visibility = "hidden";
  document.getElementById("newGif10").style.visibility = "visible";
  // set the z index -1 of nextStep1
  document.getElementById("nextStep11").style.zIndex = 1;
}

function newGif11() {
  document.getElementById("newGif10").style.visibility = "hidden";
  document.getElementById("nextStep10").style.zIndex = -1;
  document.getElementById("newGif11").style.visibility = "visible";
  newTimeout21 = setTimeout(newGreeting15, 1800);
  document.getElementById("nextStep12").style.zIndex = 1;
}
function newGreeting15() {
  document.getElementById("textArea").innerHTML = "00N/mm";
  myStopFunction5();
}
function myStopFunction5() {
  clearTimeout(newTimeout21);
}


function newGif12() {
  document.getElementById("newGif11").style.visibility = "hidden";
  document.getElementById("newGif12").style.visibility = "visible";
  newTimeout22 = setTimeout(newGreeting16, 7000);
  document.getElementById("nextStep12").style.zIndex = -1;
}
function newGreeting16() {
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep4").style.visibility = "visible";
  document.getElementById("newStep4").style.zIndex = 1;
  myStopFunction6();
}
function myStopFunction6() {
  clearTimeout(newTimeout22);
}

function newStep4() {
  document.getElementById("textArea").style.visibility = "hidden";
  document.getElementById("newGif12").style.visibility = "hidden";
  document.getElementById("newImage4").style.visibility = "hidden";
  document.getElementById("newImage5").style.visibility = "visible";
  document.getElementById("newStep4").style.visibility = "hidden";
  document.getElementById("newStep4").style.zIndex = -1;
  document.getElementById("nextStep13").style.zIndex = 1;
}

function newGif13() {
  document.getElementById("newImage5").style.visibility = "hidden";
  document.getElementById("newGif13").style.visibility = "visible";
  document.getElementById("nextStep14").style.zIndex = 1;
}

function newGif14() {
  debugger;
  document.getElementById("newGif13").style.visibility = "hidden";
  document.getElementById("newGif14").style.visibility = "visible";
  document.getElementById("nextStep13").style.zIndex = -1;
  newTimeout23 = setTimeout(newGreeting2, 1800);
  function newGreeting2() {
    document.getElementById("textArea").innerHTML = "00N/mm";
    document.getElementById("textArea").style.visibility = "visible";
    myStopFunction3();
  }
  document.getElementById("nextStep15").style.zIndex = 1;
}
function myStopFunction3() {
  clearTimeout(newTimeout23);
}

function newGif15() {
  document.getElementById("newGif14").style.visibility = "hidden";
  document.getElementById("newGif15").style.visibility = "visible";
  
  newTimeout24 = setInterval(newGreeting3, 7000);
}
function newGreeting3() {
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep5").style.visibility = "visible";
  document.getElementById("newStep5").style.zIndex = 1;
  document.getElementById("nextStep15").style.zIndex = -1;
  myStopFunction8();
}
function myStopFunction8() {
  clearTimeout(newTimeout24);
}

function newStep5() {
  document.getElementById("textArea").style.visibility = "hidden";
  document.getElementById("newGif15").style.visibility = "hidden";
  document.getElementById("newImage6").style.visibility = "visible";
  document.getElementById("newStep5").style.visibility = "visible";
  document.getElementById("newStep5").style.zIndex = -1;
  document.getElementById("nextStep16").style.zIndex = 1;
}

function newGif16() {
  document.getElementById("newImage6").style.visibility = "hidden";
  document.getElementById("newGif16").style.visibility = "visible";
  document.getElementById("nextStep17").style.zIndex = 1;
}

function newGif17() {
  document.getElementById("newGif16").style.visibility = "hidden";
  document.getElementById("newGif17").style.visibility = "visible";
  document.getElementById("nextStep16").style.zIndex = -1;
  

  newTimeout25 = setInterval(newGreeting19, 1800);
  document.getElementById("nextStep18").style.zIndex = 1;
}
function newGreeting19() {
  document.getElementById("textArea").innerHTML = "00N/mm";
  document.getElementById("textArea").style.visibility = "visible";
  myStopFunction9();
}
function myStopFunction9(){
  clearTimeout(newTimeout25);
}

function newGif18() {
  document.getElementById("newGif17").style.visibility = "hidden";
  document.getElementById("newGif18").style.visibility = "visible";
  newTimeout26 = setInterval(newGreeting20,7000);
}
function newGreeting20(){
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep6").style.visibility = "visible";
  document.getElementById("newStep6").style.zIndex = 1;
  document.getElementById("nextStep18").style.zIndex = -1;
  myStopFunction10();
}
function myStopFunction10(){
  clearInterval(newTimeout26);
}

function step17(){
  document.getElementById("Step16").style.visibility = "hidden";
  document.getElementById("Step17").style.visibility = "visible";
}