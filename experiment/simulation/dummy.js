
/* here */
var myGreating1;
var myGreating2;
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
  myGreating1 = setTimeout(myGreating1, 1800);
  function myGreating1() {
    document.getElementById("textArea").innerHTML = "00N/mm";
    myStopFunction1();
  }
  document.getElementById("nextStep3").style.zIndex = 1;
}
function myStopFunction1() {
  clearTimeout(myGreating1);
}


function newGif3() {
  document.getElementById("newGif2").style.visibility = "hidden";
  document.getElementById("newGif3").style.visibility = "visible";
  myGreating1 = setTimeout(myGreeting11, 7000);
  function myGreeting11() {
    document.getElementById("textArea").innerHTML = "333N/mm";
    document.getElementById("newStep1").style.visibility = "visible";
    document.getElementById("newStep1").style.zIndex = 1;
    myStopFunction2();
  }
  document.getElementById("nextStep3").style.zIndex = -1;
}
function myStopFunction2() {
  clearTimeout(myGreating1);
}

function newStep1() {
  document.getElementById("textArea").style.visibility = "hidden";
  document.getElementById("newGif3").style.visibility = "hidden";
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
  document.getElementById("newGif4").style.visibility = "hidden";
  document.getElementById("newGif5").style.visibility = "visible";
  document.getElementById("nextStep4").style.zIndex = -1;
  /* time function to display text in machine */
  myGreating2 = setTimeout(myGreating2, 1800);
  function myGreating2() {
    document.getElementById("textArea").innerHTML = "00N/mm";
    myStopFunction3();
  }
  document.getElementById("nextStep6").style.zIndex = 1;
}
function myStopFunction3() {
  clearTimeout(myGreating2);
}

function newGif6() {
  document.getElementById("newGif5").style.visibility = "hidden";
  document.getElementById("newGif6").style.visibility = "visible";
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep2").style.visibility = "visible";
  document.getElementById("newStep2").style.zIndex = 1;
  document.getElementById("nextStep6").style.zIndex = -1;
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

  document.getElementById("nextStep9").style.zIndex = 1;
}
function newGif9() {
  document.getElementById("newGif8").style.visibility = "hidden";
  document.getElementById("newGif9").style.visibility = "visible";
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep3").style.visibility = "visible";
  document.getElementById("newStep3").style.zIndex = 1;
  document.getElementById("nextStep9").style.zIndex = -1;
}