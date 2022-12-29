var age = 0;
var logo = 0;
var myTim;
function agesizeIn() {

  age = document.getElementById("ageIn").value;


  if (age !== "") {

    var date1 = new Date(age);
    // var today = new Date();


    logo = new Date(date1);

    //Month Print
    document.getElementById("demo").innerHTML = logo.getMonth() + 1;
    //Date Print
    document.getElementById("demo2").innerHTML = logo.getDate();
    //Year Print

    //-----------------------------------------------
    document.getElementById("cube").style.visibility = "visible";

    document.getElementById("cubedatehidden").style.visibility = "visible";
    document.getElementById("next10").style.visibility = "visible";
    document.getElementById("in2").style.visibility = "hidden";


  }

  else {
    document.getElementById("fillBox").innerHTML = "Please Enter Date";
    //alert("Wrong");

  }

  var date = age.split('-')




  document.getElementById("cubedate").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate1").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate2").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate3").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate4").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate5").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate6").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate7").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate8").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate9").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate10").innerText = date[2] + '/' + date[1];
  document.getElementById("cubedate11").innerText = date[2] + '/' + date[1];
}

function step12() {
  document.getElementById("Step12").style.visibility = "visible";
  document.getElementById("Step11").style.visibility = "hidden";
  document.getElementById("next10").style.visibility = "hidden";
  document.getElementById("cubedatehidden").style.visibility = "hidden";
  document.getElementById("cube").style.visibility = "hidden";
  // document.getElementById("trans14").style.visibility="hidden";

}

function cube1() {
  document.getElementById("png13").style.animationPlayState = "running";
  document.getElementById("png13").style.animationIterationCount = "1";
  document.getElementById("cubedate").style.visibility = "hidden";
  document.getElementById("trans20").style.visibility = "hidden";
  document.getElementById("arr19").style.visibility = "hidden";
  document.getElementById("next11").style.visibility = "visible";



  myTim = setTimeout(function () {
    myGreeting("cubedate6");
  }
    , 300);

  // document.getElementById("transp1").style.visibility = "visible";
}


function cube2() {
  document.getElementById("png14").style.animationPlayState = "running";
  document.getElementById("png14").style.animationIterationCount = "1";
  document.getElementById("cubedate1").style.visibility = "hidden";
  document.getElementById("trans19").style.visibility = "hidden";
  document.getElementById("trans20").style.visibility = "visible";
  document.getElementById("arr18").style.visibility = "hidden";
  document.getElementById("arr19").style.visibility = "visible";
  myTim = setTimeout(function () {
    myGreeting("cubedate7");
  }
    , 300);
  // myTimeout = setTimeout(myGreeting("cubedate7"), 8000);

  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function cube3() {
  document.getElementById("png15").style.animationPlayState = "running";
  document.getElementById("png15").style.animationIterationCount = "1";
  document.getElementById("cubedate2").style.visibility = "hidden";
  document.getElementById("trans18").style.visibility = "hidden";
  document.getElementById("trans19").style.visibility = "visible";
  document.getElementById("arr17").style.visibility = "hidden";
  document.getElementById("arr18").style.visibility = "visible";
  myTim = setTimeout(function () {
    myGreeting("cubedate8");
  }
    , 300);
  // myTimeout = setTimeout(myGreeting("cubedate8"), 8000);
  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function cube4() {
  document.getElementById("png16").style.animationPlayState = "running";
  document.getElementById("png16").style.animationIterationCount = "1";
  document.getElementById("cubedate3").style.visibility = "hidden";
  document.getElementById("trans17").style.visibility = "hidden";
  document.getElementById("trans18").style.visibility = "visible";
  document.getElementById("arr16").style.visibility = "hidden";
  document.getElementById("arr17").style.visibility = "visible";
  myTim = setTimeout(function () {
    myGreeting("cubedate9");
  }
    , 300);
  // myTimeout = setTimeout(myGreeting("cubedate9"), 8000);
  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function cube5() {
  document.getElementById("png17").style.animationPlayState = "running";
  document.getElementById("png17").style.animationIterationCount = "1";
  document.getElementById("cubedate4").style.visibility = "hidden";
  document.getElementById("trans16").style.visibility = "hidden";
  document.getElementById("trans17").style.visibility = "visible";
  document.getElementById("arr15").style.visibility = "hidden";
  document.getElementById("arr16").style.visibility = "visible";
  myTim = setTimeout(function () {
    myGreeting("cubedate10");
  }
    , 300);
  // myTimeout = setTimeout(myGreeting("cubedate10"), 8000);

  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function cube6() {
  document.getElementById("png18").style.animationPlayState = "running";
  document.getElementById("png18").style.animationIterationCount = "1";
  document.getElementById("cubedate5").style.visibility = "hidden";
  document.getElementById("trans15").style.visibility = "hidden";
  document.getElementById("trans16").style.visibility = "visible";
  document.getElementById("arr14").style.visibility = "hidden";
  document.getElementById("arr15").style.visibility = "visible";

  myTim = setTimeout(function () {
    myGreeting("cubedate11");
  }
    , 300);
  // myTimeout = setTimeout(myGreeting("cubedate11"), 8000);
  // document.getElementById("gif").style.visibility = "hidden";
  // document.getElementById("transp1").style.visibility = "visible";
}

function myGreeting(id) {
  debugger;
  document.getElementById(id).style.visibility = "visible";
  myStopFunction(myTim);
}
function myStopFunction(myTim) {
  clearTimeout(myTim);
}


function cube9() {
  document.getElementById("png26").style.animationPlayState = "running";
  document.getElementById("png26").style.animationIterationCount = "1";
  document.getElementById("trans23").style.visibility = "hidden";
  document.getElementById("trans22").style.visibility = "visible";
  document.getElementById("arr23").style.visibility = "hidden";
  document.getElementById("arr22").style.visibility = "visible";

}

function cube8() {
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

function cloth(){

  document.getElementById("png30").style.animationPlayState = "running";
  document.getElementById("png30").style.animationIterationCount = "1";


}
