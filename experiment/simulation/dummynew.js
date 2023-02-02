
function newGif10() {
  document.getElementById("newImage4").style.visibility = "hidden";
  document.getElementById("newGif10").style.visibility = "visible";
  document.getElementById("newArr10").style.visibility = "hidden";
  document.getElementById("newcubedate4").style.visibility = "hidden";
  mytime = setInterval(mygreeting, 2500);
  function mygreeting() {
    document.getElementById("nextStep11").style.zIndex = 1;
    document.getElementById("newArr11").style.visibility = "visible";
    cleartime();
  }
  function cleartime() {
    clearInterval(mytime);
  }
}

function newGif11() {
  document.getElementById("newGif10").style.visibility = "hidden";
  document.getElementById("nextStep10").style.zIndex = -1;
  document.getElementById("newGif11").style.visibility = "visible";
  document.getElementById("newArr11").style.visibility = "hidden";
  _newTimeout21 = setTimeout(_newGreeting15, 1800);
  document.getElementById("nextStep12").style.zIndex = 1;
}
function _newGreeting15() {
  document.getElementById("textArea").innerHTML = "00N/mm";
  document.getElementById("newArr12").style.visibility = "visible";
  _myStopFunction11();
}
function _myStopFunction11() {
  clearTimeout(_newTimeout21);
}


function newGif12() {
  document.getElementById("newGif11").style.visibility = "hidden";
  document.getElementById("newGif12").style.visibility = "visible";
  document.getElementById("newArr12").style.visibility = "hidden";
  _newTimeout22 = setTimeout(_newGreeting16, 10000);
  document.getElementById("nextStep12").style.zIndex = -1;
}
function _newGreeting16() {
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep4").style.visibility = "visible";
  document.getElementById("newStep4").style.zIndex = 1;
  _myStopFunction12();
}
function _myStopFunction12() {
  clearTimeout(_newTimeout22);
}

function newStep4() {
  document.getElementById("textArea").style.visibility = "hidden";
  document.getElementById("newGif12").style.visibility = "hidden";
  document.getElementById("newImage4").style.visibility = "hidden";
  document.getElementById("newImage5").style.visibility = "visible";
  document.getElementById("newStep4").style.visibility = "hidden";
  document.getElementById("newStep4").style.zIndex = -1;
  document.getElementById("nextStep13").style.zIndex = 1;
  document.getElementById("newArr13").style.visibility = "visible";
}

function newGif13() {
  document.getElementById("newImage5").style.visibility = "hidden";
  document.getElementById("newGif13").style.visibility = "visible";
  document.getElementById("newcubedate5").style.visibility = "hidden";
  document.getElementById("newArr13").style.visibility = "hidden";

  mytime = setInterval(mygreeting, 2500);
  function mygreeting() {
    document.getElementById("nextStep14").style.zIndex = 1;
    document.getElementById("newArr14").style.visibility = "visible";
    cleartime();
  }
  function cleartime() {
    clearInterval(mytime);
  }
}

function newGif14() {

  document.getElementById("newGif13").style.visibility = "hidden";
  document.getElementById("newGif14").style.visibility = "visible";
  document.getElementById("nextStep13").style.zIndex = -1;
  document.getElementById("newArr14").style.visibility = "hidden";
  _newTimeout23 = setTimeout(_newGreeting2, 1800);
  function _newGreeting2() {
    document.getElementById("textArea").innerHTML = "00N/mm";
    document.getElementById("textArea").style.visibility = "visible";
    document.getElementById("newArr15").style.visibility = "visible";
    _myStopFunction13();
  }
  document.getElementById("nextStep15").style.zIndex = 1;
}
function _myStopFunction13() {
  clearTimeout(_newTimeout23);
}

function newGif15() {
  document.getElementById("newGif14").style.visibility = "hidden";
  document.getElementById("newGif15").style.visibility = "visible";
  document.getElementById("newArr15").style.visibility = "hidden";
  _newTimeout24 = setInterval(_newGreeting3, 10000);
}
function _newGreeting3() {
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep5").style.visibility = "visible";
  document.getElementById("newStep5").style.zIndex = 1;
  document.getElementById("nextStep15").style.zIndex = -1;
  _myStopFunction14();
}
function _myStopFunction14() {
  clearTimeout(_newTimeout24);
}

function newStep5() {
  document.getElementById("textArea").style.visibility = "hidden";
  document.getElementById("newGif15").style.visibility = "hidden";
  document.getElementById("newImage6").style.visibility = "visible";
  document.getElementById("newStep5").style.visibility = "visible";
  document.getElementById("newStep5").style.zIndex = -1;
  document.getElementById("nextStep16").style.zIndex = 1;
  document.getElementById("newArr16").style.visibility = "visible";
}

function newGif16() {
  document.getElementById("newImage6").style.visibility = "hidden";
  document.getElementById("newGif16").style.visibility = "visible";

  document.getElementById("newcubedate6").style.visibility = "hidden";
  document.getElementById("newArr16").style.visibility = "hidden";
  mytime = setInterval(mygreeting, 2500);
  function mygreeting() {
    document.getElementById("nextStep17").style.zIndex = 1;
    document.getElementById("newArr17").style.visibility = "visible";
    cleartime();
  }
  function cleartime() {
    clearInterval(mytime);
  }
}

function newGif17() {
  document.getElementById("newGif16").style.visibility = "hidden";
  document.getElementById("newGif17").style.visibility = "visible";
  document.getElementById("nextStep16").style.zIndex = -1;

  document.getElementById("newArr17").style.visibility = "hidden";

  _newTimeout25 = setInterval(_newGreeting19, 1800);
  document.getElementById("nextStep18").style.zIndex = 1;
}
function _newGreeting19() {
  document.getElementById("textArea").innerHTML = "00N/mm";
  document.getElementById("textArea").style.visibility = "visible";
  document.getElementById("newArr18").style.visibility = "visible";
  _myStopFunction15();
}
function _myStopFunction15() {
  clearTimeout(_newTimeout25);
}

function newGif18() {
  document.getElementById("newGif17").style.visibility = "hidden";
  document.getElementById("newGif18").style.visibility = "visible";

  document.getElementById("newArr18").style.visibility = "hidden";
  _newTimeout26 = setInterval(_newGreeting20, 10000);
}
function _newGreeting20() {
  document.getElementById("textArea").innerHTML = "333N/mm";
  document.getElementById("newStep6").style.visibility = "visible";
  document.getElementById("newStep6").style.zIndex = 1;
  document.getElementById("nextStep18").style.zIndex = -1;
  _myStopFunction16();
}
function _myStopFunction16() {
  clearInterval(_newTimeout26);
}

function step17() {
  document.getElementById("Step16").style.visibility = "hidden";
  document.getElementById("Step17").style.visibility = "visible";
}