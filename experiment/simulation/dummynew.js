

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
  _newTimeout21 = setTimeout(_newGreeting21, 2000);
}

function _newGreeting21() {
  document.getElementById("next13").style.visibility = "visible";
  document.getElementById("png44").style.visibility = "hidden";
}

function step16() {

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
  

  document.getElementById("newcubedate1").style.visibility = "hidden";
  document.getElementById("newArr1").style.visibility = "hidden";

  myNewTime = setInterval(myFun, 7200);
  function myFun() {
    document.getElementById("newArr2").style.visibility = "visible";
    document.getElementById("newcubedate4").style.visibility = "visible";
    document.getElementById("nextStep11").style.zIndex = 1;
    clearTime();
  }
  function clearTime() {
    clearInterval(myNewTime);
  }

}

function newGif11() {
  document.getElementById("newGif10").style.visibility = "hidden";
  document.getElementById("nextStep10").style.zIndex = -1;
  document.getElementById("newGif11").style.visibility = "visible";

  document.getElementById("newArr2").style.visibility = "hidden";


  document.getElementById("newcubedate4").style.visibility = "hidden";


  _newTimeout21 = setTimeout(_newGreeting15, 1800);
  document.getElementById("nextStep12").style.zIndex = 1;
}
function _newGreeting15() {
  document.getElementById("textArea").innerHTML = "00N/mm";
  document.getElementById("newArr3").style.visibility = "visible";
  _myStopFunction11();
}
function _myStopFunction11() {
  clearTimeout(_newTimeout21);
}


function newGif12() {
  document.getElementById("newGif11").style.visibility = "hidden";
  document.getElementById("newGif12").style.visibility = "visible";

  document.getElementById("newArr3").style.visibility = "hidden";
  document.getElementById("newcubedate3").style.visibility = "hidden";
  document.getElementById("newcubedate2").style.visibility = "hidden";

  _newTimeout22 = setTimeout(_newGreeting16, 7000);
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

  document.getElementById("newArr4").style.visibility = "visible";
  document.getElementById("newcubedate2").style.visibility = "visible";
  document.getElementById("newcubedate3").style.visibility = "visible";
}

function newGif13() {
  document.getElementById("newImage5").style.visibility = "hidden";
  document.getElementById("newGif13").style.visibility = "visible";
  

  document.getElementById("newArr4").style.visibility = "hidden";
  document.getElementById("newcubedate2").style.visibility = "hidden";
  myNewTime = setInterval(myFun,11500);
  function myFun(){
    document.getElementById("newArr5").style.visibility = "visible";
    document.getElementById("newcubedate4").style.visibility = "visible";
    document.getElementById("nextStep14").style.zIndex = 1;
    clearTime();
  }
  function clearTime(){
    clearInterval(myNewTime);
  }

}

function newGif14() {

  document.getElementById("newGif13").style.visibility = "hidden";
  document.getElementById("newGif14").style.visibility = "visible";
  document.getElementById("nextStep13").style.zIndex = -1;

  document.getElementById("newArr5").style.visibility = "hidden";
  
  document.getElementById("newcubedate4").style.visibility = "hidden";

  _newTimeout23 = setTimeout(_newGreeting2, 1800);
  function _newGreeting2() {
    document.getElementById("textArea").innerHTML = "00N/mm";
    document.getElementById("textArea").style.visibility = "visible";
    document.getElementById("newArr6").style.visibility = "visible";
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

  document.getElementById("newArr6").style.visibility = "hidden";
  document.getElementById("newcubedate1").style.visibility = "hidden";

  _newTimeout24 = setInterval(_newGreeting3, 7000);
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

  document.getElementById("newArr7").style.visibility = "visible";
}

function newGif16() {
  document.getElementById("newImage6").style.visibility = "hidden";
  document.getElementById("newGif16").style.visibility = "visible";
  

  document.getElementById("newArr7").style.visibility = "hidden";
  document.getElementById("newcubedate3").style.visibility = "hidden";
  myNewTime = setInterval(myFun,9200);
  function myFun(){
    document.getElementById("newArr8").style.visibility = "visible";
    document.getElementById("newcubedate4").style.visibility = "visible";
    document.getElementById("nextStep17").style.zIndex = 1;
    clearTime();
  }
  function clearTime(){
    clearInterval(myNewTime);
  }
}

function newGif17() {
  document.getElementById("newGif16").style.visibility = "hidden";
  document.getElementById("newGif17").style.visibility = "visible";
  document.getElementById("nextStep16").style.zIndex = -1;

  document.getElementById("newArr8").style.visibility = "hidden";
  
  document.getElementById("newcubedate4").style.visibility = "hidden";

  _newTimeout25 = setInterval(_newGreeting19, 1800);
  document.getElementById("nextStep18").style.zIndex = 1;
}
function _newGreeting19() {
  document.getElementById("textArea").innerHTML = "00N/mm";
  document.getElementById("textArea").style.visibility = "visible";
  document.getElementById("newArr9").style.visibility = "visible";
  _myStopFunction15();
}
function _myStopFunction15() {
  clearTimeout(_newTimeout25);
}

function newGif18() {
  document.getElementById("newGif17").style.visibility = "hidden";
  document.getElementById("newGif18").style.visibility = "visible";

  document.getElementById("newArr9").style.visibility = "hidden";

  _newTimeout26 = setInterval(_newGreeting20, 7000);
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