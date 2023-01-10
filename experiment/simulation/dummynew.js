function step13() {
  document.getElementById("Step13").style.visibility = "visible";
  document.getElementById("Step12").style.visibility = "hidden";
  document.getElementById("next11").style.visibility = "hidden";
  document.getElementById("png11").style.visibility = "hidden";
  document.getElementById("png12").style.visibility = "hidden";
  document.getElementById("png13").style.visibility = "hidden";
  document.getElementById("png14").style.visibility = "hidden";
  document.getElementById("png15").style.visibility = "hidden";
  document.getElementById("png16").style.visibility = "hidden";
  document.getElementById("png17").style.visibility = "hidden";
  document.getElementById("png18").style.visibility = "hidden";
  document.getElementById("png19").style.visibility = "hidden";
  document.getElementById("cubedate6").style.visibility = "hidden";
  document.getElementById("cubedate7").style.visibility = "hidden";
  document.getElementById("cubedate8").style.visibility = "hidden";
  document.getElementById("cubedate9").style.visibility = "hidden";
  document.getElementById("cubedate10").style.visibility = "hidden";
  document.getElementById("cubedate11").style.visibility = "hidden";
  // document.getElementById("cubedatehidden").style.visibility="hidden";
  // document.getElementById("cube").style.visibility="hidden";
  // document.getElementById("trans14").style.visibility="hidden";
}


function cube9() {
  debugger;
  document.getElementById("png26").style.animationPlayState = "running";
  document.getElementById("png26").style.animationIterationCount = "1";
  document.getElementById("trans23").style.visibility = "hidden";
  document.getElementById("trans22").style.visibility = "visible";
  document.getElementById("arr23").style.visibility = "hidden";
  document.getElementById("arr22").style.visibility = "visible";

}

function cube8() {
  debugger;
  document.getElementById("png27").style.animationPlayState = "running";
  document.getElementById("png27").style.animationIterationCount = "1";
  document.getElementById("trans22").style.visibility = "hidden";
  document.getElementById("trans21").style.visibility = "visible";
  document.getElementById("arr22").style.visibility = "hidden";
  document.getElementById("arr21").style.visibility = "visible";

}

function cube7() {
  document.getElementById("png28").style.animationPlayState = "running";
  document.getElementById("png28").style.animationIterationCount = "1";
  document.getElementById("trans21").style.visibility = "hidden";
  document.getElementById("png30").style.visibility = "visible";
  document.getElementById("arr21").style.visibility = "hidden";
  // document.getElementById("arr22").style.visibility = "visible";
}

function cloth() {
  document.getElementById("png30").style.animationPlayState = "running";
  document.getElementById("png30").style.animationIterationCount = "1";
  myTimeout14 = setTimeout(myGreeting14, 2000);
}

function myGreeting14() {
  document.getElementById("next12").style.visibility = "visible";
  document.getElementById("png30").style.visibility = "hidden";
  document.getElementById("png31").style.visibility = "visible";
  document.getElementById("png32").style.visibility = "visible";
  document.getElementById("png33").style.visibility = "visible";
  document.getElementById("png26").style.visibility = "hidden";
  document.getElementById("png27").style.visibility = "hidden";
  document.getElementById("png28").style.visibility = "hidden";
  myStopFunction();
}
function myStopFunction() {
  clearTimeout(myTimeout14);
}

// js for step 14

function step14() {
  document.getElementById("Step14").style.visibility = "visible";
  document.getElementById("Step13").style.visibility = "hidden";
  document.getElementById("png20").style.visibility = "hidden";
  document.getElementById("png21").style.visibility = "hidden";
  document.getElementById("png22").style.visibility = "hidden";
  document.getElementById("png23").style.visibility = "hidden";
  document.getElementById("png24").style.visibility = "hidden";
  document.getElementById("png25").style.visibility = "hidden";
  document.getElementById("png26").style.visibility = "hidden";
  document.getElementById("png27").style.visibility = "hidden";
  document.getElementById("png28").style.visibility = "hidden";
  document.getElementById("png29").style.visibility = "hidden";
  document.getElementById("png30").style.visibility = "hidden";
  document.getElementById("png31").style.visibility = "hidden";
  document.getElementById("png32").style.visibility = "hidden";
  document.getElementById("png33").style.visibility = "hidden";
  document.getElementById("trans21").style.visibility = "hidden";
  document.getElementById("trans22").style.visibility = "hidden";
  document.getElementById("trans23").style.visibility = "hidden";
  document.getElementById("arr21").style.visibility = "hidden";
  document.getElementById("arr22").style.visibility = "hidden";
  document.getElementById("arr23").style.visibility = "hidden";
  document.getElementById("next12").style.visibility = "hidden";
  document.getElementById("nextStep1").style.zIndex = 1;
  document.getElementById("newImage1").style.visibility = "visible";
}


function newGif1() {
  document.getElementById("newImage1").style.visibility = "hidden";
  document.getElementById("newGif1").style.visibility = "visible";
  // set the z index -1 of nextStep1
  document.getElementById("nextStep2").style.zIndex = 1;
}

function newGif2() {
  document.getElementById("newGif1").style.visibility = "hidden";
  document.getElementById("nextStep1").style.zIndex = -1;
  document.getElementById("newGif2").style.visibility = "visible";
  myTimeout15 = setTimeout(myGreeting15, 1800);
  document.getElementById("nextStep3").style.zIndex = 1;
}
function myGreeting15() {
  document.getElementById("textArea").innerHTML = "00N/mm";
  myStopFunction5();
}
function myStopFunction5() {
  clearTimeout(myTimeout15);
}


function newGif3() {
  document.getElementById("newGif2").style.visibility = "hidden";
  document.getElementById("newGif3").style.visibility = "visible";
  myTimeout16 = setTimeout(myGreeting16, 7000);
  document.getElementById("nextStep3").style.zIndex = -1;
}
function myGreeting16() {
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep1").style.visibility = "visible";
  document.getElementById("newStep1").style.zIndex = 1;
  myStopFunction6();
}
function myStopFunction6() {
  clearTimeout(myTimeout16);
}

function newStep1() {
  document.getElementById("textArea").style.visibility = "hidden";
  document.getElementById("newGif3").style.visibility = "hidden";
  document.getElementById("newImage1").style.visibility = "hidden";
  document.getElementById("newImage2").style.visibility = "visible";
  document.getElementById("newStep1").style.visibility = "hidden";
  document.getElementById("newStep1").style.zIndex = -1;
  document.getElementById("nextStep4").style.zIndex = 1;
}

function newGif4() {
  document.getElementById("newImage2").style.visibility = "hidden";
  document.getElementById("newGif4").style.visibility = "visible";
  document.getElementById("nextStep5").style.zIndex = 1;
}

function newGif5() {
  debugger;
  document.getElementById("newGif4").style.visibility = "hidden";
  document.getElementById("newGif5").style.visibility = "visible";
  document.getElementById("nextStep4").style.zIndex = -1;
  myTimeout17 = setTimeout(myGreeting2, 1800);
  function myGreeting2() {
    document.getElementById("textArea").innerHTML = "00N/mm";
    document.getElementById("textArea").style.visibility = "visible";
    myStopFunction3();
  }
  document.getElementById("nextStep6").style.zIndex = 1;
}
function myStopFunction3() {
  clearTimeout(myTimeout17);
}

function newGif6() {
  document.getElementById("newGif5").style.visibility = "hidden";
  document.getElementById("newGif6").style.visibility = "visible";
  // add time function here
  myTimeout18 = setInterval(myGreeting3, 7000);
}
function myGreeting3() {
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep2").style.visibility = "visible";
  document.getElementById("newStep2").style.zIndex = 1;
  document.getElementById("nextStep6").style.zIndex = -1;
  myStopFunction8();
}
function myStopFunction8() {
  clearTimeout(myTimeout18);
}

function newStep2() {
  document.getElementById("textArea").style.visibility = "hidden";
  document.getElementById("newGif6").style.visibility = "hidden";
  document.getElementById("newImage3").style.visibility = "visible";
  document.getElementById("newStep2").style.visibility = "visible";
  document.getElementById("newStep2").style.zIndex = -1;
  document.getElementById("nextStep7").style.zIndex = 1;
}

function newGif7() {
  document.getElementById("newImage3").style.visibility = "hidden";
  document.getElementById("newGif7").style.visibility = "visible";
  document.getElementById("nextStep8").style.zIndex = 1;
}

function newGif8() {
  document.getElementById("newGif7").style.visibility = "hidden";
  document.getElementById("newGif8").style.visibility = "visible";
  document.getElementById("nextStep7").style.zIndex = -1;
  /* time funciton for data in machine */

  myTimeout19 = setInterval(myGreeting19, 1800);
  document.getElementById("nextStep9").style.zIndex = 1;
}
function myGreeting19() {
  document.getElementById("textArea").innerHTML = "00N/mm";
  document.getElementById("textArea").style.visibility = "visible";
  myStopFunction9();
}
function myStopFunction9(){
  clearTimeout(myTimeout19);
}

function newGif9() {
  document.getElementById("newGif8").style.visibility = "hidden";
  document.getElementById("newGif9").style.visibility = "visible";
  myTimeout20 = setInterval(myGreeting20,7000);
}
function myGreeting20(){
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep3").style.visibility = "visible";
  document.getElementById("newStep3").style.zIndex = 1;
  document.getElementById("nextStep9").style.zIndex = -1;
  myStopFunction10();
}
function myStopFunction10(){
  clearInterval(myTimeout20);
}

function step15() {
  document.getElementById("textArea").style.visibility = "hidden";
  document.getElementById("Step15").style.visibility = "visible";
  document.getElementById("Step14").style.visibility = "hidden";
  document.getElementById("newImage1").style.visibility = "hidden";
  document.getElementById("newImage2").style.visibility = "hidden";
  document.getElementById("newImage3").style.visibility = "hidden";
  document.getElementById("newGif1").style.visibility = "hidden";
  document.getElementById("newGif2").style.visibility = "hidden";
  document.getElementById("newGif3").style.visibility = "hidden";
  document.getElementById("newGif4").style.visibility = "hidden";
  document.getElementById("newGif5").style.visibility = "hidden";
  document.getElementById("newGif6").style.visibility = "hidden";
  document.getElementById("newGif7").style.visibility = "hidden";
  document.getElementById("newGif8").style.visibility = "hidden";
  document.getElementById("newGif9").style.visibility = "hidden";
  document.getElementById("nextStep1").style.visibility = "hidden";
  document.getElementById("nextStep2").style.visibility = "hidden";
  document.getElementById("nextStep3").style.visibility = "hidden";
  document.getElementById("nextStep4").style.visibility = "hidden";
  document.getElementById("nextStep5").style.visibility = "hidden";
  document.getElementById("nextStep6").style.visibility = "hidden";
  document.getElementById("nextStep7").style.visibility = "hidden";
  document.getElementById("nextStep8").style.visibility = "hidden";
  document.getElementById("nextStep9").style.visibility = "hidden";
  document.getElementById("newStep1").style.zIndex = -1;
  document.getElementById("newStep2").style.zIndex = -1;
  document.getElementById("newStep3").style.zIndex = -1;
  document.getElementById("newStep1").style.visibility = "hidden";
  document.getElementById("newStep2").style.visibility = "hidden";
  document.getElementById("newStep3").style.visibility = "hidden";

  document.getElementById("arr26").style.visibility = "visible";
}

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
  myTimeout14 = setTimeout(myGreeting167, 2000);
}

function myGreeting167() {
  document.getElementById("next13").style.visibility = "visible";
}