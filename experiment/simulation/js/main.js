// Step1
function step2() {
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("Step2").style.visibility = "visible";

}

// Step2
function moveplate() {
    document.getElementById("png1").style.visibility = "hidden";
    document.getElementById("trans1").style.visibility = "hidden";
    document.getElementById("arr1").style.visibility = "hidden";
    document.getElementById("gif1").style.visibility = "visible";

    myTimeout = setTimeout(myGreeting, 6000);
}

function moveplate1() {
    document.getElementById("gif1").style.visibility = "hidden";
    document.getElementById("trans2").style.visibility = "hidden";
    document.getElementById("arr2").style.visibility = "hidden";
    document.getElementById("gif2").style.visibility = "visible";

    myTimeout1 = setTimeout(myGreeting1, 6000);
}


function moveplate2() {
    document.getElementById("gif2").style.visibility = "hidden";
    document.getElementById("trans3").style.visibility = "hidden";
    document.getElementById("gif3").style.visibility = "visible";
    document.getElementById("arr3").style.visibility = "hidden";

    myTimeout2 = setTimeout(myGreeting2, 6000);
}

function moveplate3() {
    document.getElementById("gif3").style.visibility = "hidden";
    document.getElementById("trans4").style.visibility = "hidden";
    document.getElementById("gif4").style.visibility = "visible";
    document.getElementById("arr4").style.visibility = "hidden";
    myTimeout3 = setTimeout(myGreeting3, 6000);
}

// time delay function
function myGreeting() {
    document.getElementById("arr2").style.visibility = "visible";
    document.getElementById("trans2").style.visibility = "visible";


    myStopFunction1();
}

function myStopFunction1() {
    clearTimeout(myTimeout);

}

function myGreeting1() {
    document.getElementById("arr3").style.visibility = "visible";
    document.getElementById("trans3").style.visibility = "visible";


    myStopFunction2();
}

function myStopFunction2() {
    clearTimeout(myTimeout1);

}

function myGreeting2() {
    document.getElementById("arr4").style.visibility = "visible";
    document.getElementById("trans4").style.visibility = "visible";


    myStopFunction3();
}

function myStopFunction3() {
    clearTimeout(myTimeout2);

}

function myGreeting3() {
    document.getElementById("next1").style.visibility = "visible";


    myStopFunction4();
}

function myStopFunction4() {
    clearTimeout(myTimeout3);

}

// Step3
function step3() {
    document.getElementById("Step3").style.visibility = "visible";
    document.getElementById("Step2").style.visibility = "hidden";
    document.getElementById("next1").style.visibility = "hidden";
    document.getElementById("gif4").style.visibility = "hidden";

}

document.getElementById("gif5").style.display = "none";

document.getElementById("trans5").onclick = function () {
    document.getElementById("png2").style.display = "none";
    document.getElementById("gif5").style.display = "block";
    document.getElementById("trans5").style.display = "none";
    document.getElementById("arr5").style.display = "none";
    myTimeout4 = setTimeout(myGreeting4, 7000);
    // myTimeout1 = setTimeout(myGreeting1, 12000);
    // myTimeout2 = setTimeout(myGreeting2, 17000);
}
function myGreeting4() {
    document.getElementById("next2").style.visibility = "visible";
    myStopFunction5();
}
function myStopFunction5() {
    clearTimeout(myTimeout4);
}


// Step4

function step4() {
    document.getElementById("Step4").style.visibility = "visible";
    document.getElementById("Step3").style.visibility = "hidden";
    document.getElementById("next2").style.visibility = "hidden";
    document.getElementById("gif5").style.visibility = "hidden";

}
document.getElementById("trans6").onclick = function () {
    debugger;
    document.getElementById("arr6").style.visibility = "hidden";
    document.getElementById("png3").style.visibility = "hidden";
    document.getElementById("gif6").style.visibility = "visible";
    document.getElementById("trans8").style.visibility = "visible";
    document.getElementById("trans6").style.visibility = "hidden";
    myTimeout5 = setTimeout(myGreeting5, 2500);

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
        myTimeout6 = setTimeout(myGreeting6, 9000);
    }

    else {
        document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>is 90gm for speciman";

    }

}

function myGreeting5() {
    document.getElementById("arr7").style.visibility = "visible";
    myStopFunction6();
}

function myStopFunction6() {
    clearTimeout(myTimeout5);


}
function myGreeting6() {
    document.getElementById("next3").style.visibility = "visible";
    myStopFunction7();
}

function myStopFunction7() {
    clearTimeout(myTimeout6);



}

// Step5

function step5() {
    document.getElementById("Step5").style.visibility = "visible";
    document.getElementById("Step4").style.visibility = "hidden";
    document.getElementById("next3").style.visibility = "hidden";
    document.getElementById("gif7").style.visibility = "hidden";
    document.getElementById("png4").style.visibility = "hidden";
    document.getElementById("trans7").style.visibility = "hidden";

}

function funst5() {
    document.getElementById("gif8").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "hidden";
    document.getElementById("trans9").style.visibility = "hidden";
    document.getElementById("arr9").style.visibility = "hidden";
    myTimeout7 = setTimeout(myGreeting7, 10000);


}
function myGreeting7() {
    document.getElementById("next4").style.visibility = "visible";
    myStopFunction8();
}
function myStopFunction8() {
    clearTimeout(myTimeout7);
}

// Step 6

function step6() {
    document.getElementById("Step6").style.visibility = "visible";
    document.getElementById("Step5").style.visibility = "hidden";
    document.getElementById("next4").style.visibility = "hidden";
    document.getElementById("gif8").style.visibility = "hidden";
    document.getElementById("png4").style.visibility = "hidden";
    document.getElementById("trans9").style.visibility = "hidden";

}

function funst6() {
    document.getElementById("gif9").style.visibility = "visible";
    document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("trans10").style.visibility = "hidden";
    document.getElementById("arr10").style.visibility = "hidden";
    myTimeout8 = setTimeout(myGreeting8, 8000);


}
function myGreeting8() {
    document.getElementById("next5").style.visibility = "visible";
    myStopFunction9();
}
function myStopFunction9() {
    clearTimeout(myTimeout8);
}


// Step7


function step7() {
    document.getElementById("Step7").style.visibility = "visible";
    document.getElementById("Step6").style.visibility = "hidden";
    document.getElementById("next5").style.visibility = "hidden";
    document.getElementById("gif9").style.visibility = "hidden";
    document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("trans10").style.visibility = "hidden";

}

function funst7() {
    document.getElementById("gif10").style.visibility = "visible";
    document.getElementById("png7").style.visibility = "hidden";
    document.getElementById("trans11").style.visibility = "hidden";
    document.getElementById("arr11").style.visibility = "hidden";
    myTimeout9 = setTimeout(myGreeting9, 22000);


}
function myGreeting9() {
    document.getElementById("next6").style.visibility = "visible";
    myStopFunction10();
}
function myStopFunction10() {
    clearTimeout(myTimeout9);
}

// Step8

function step8() {
    document.getElementById("Step8").style.visibility = "visible";
    document.getElementById("Step7").style.visibility = "hidden";
    document.getElementById("next6").style.visibility = "hidden";
    document.getElementById("gif10").style.visibility = "hidden";
    document.getElementById("png7").style.visibility = "hidden";
    document.getElementById("trans11").style.visibility = "hidden";

}

function funst8() {
    document.getElementById("gif11").style.visibility = "visible";
    document.getElementById("png8").style.visibility = "hidden";
    document.getElementById("trans12").style.visibility = "hidden";
    document.getElementById("arr12").style.visibility = "hidden";
    myTimeout10 = setTimeout(myGreeting10, 8000);


}
function myGreeting10() {
    document.getElementById("next7").style.visibility = "visible";
    myStopFunction11();
}
function myStopFunction11() {
    clearTimeout(myTimeout10);
}

// Step9

function step9() {
    document.getElementById("Step9").style.visibility = "visible";
    document.getElementById("Step8").style.visibility = "hidden";
    document.getElementById("next7").style.visibility = "hidden";
    document.getElementById("gif11").style.visibility = "hidden";
    document.getElementById("png8").style.visibility = "hidden";
    document.getElementById("trans12").style.visibility = "hidden";

}

function funst9() {
    document.getElementById("gif12").style.visibility = "visible";
    document.getElementById("png9").style.visibility = "hidden";
    document.getElementById("trans13").style.visibility = "hidden";
    document.getElementById("arr13").style.visibility = "hidden";
    myTimeout11 = setTimeout(myGreeting11, 12000);


}
function myGreeting11() {
    document.getElementById("next8").style.visibility = "visible";
    myStopFunction12();
}
function myStopFunction12() {
    clearTimeout(myTimeout11);
}

// Step10

function step10() {
    document.getElementById("Step10").style.visibility = "visible";
    document.getElementById("Step9").style.visibility = "hidden";
    document.getElementById("next8").style.visibility = "hidden";
    document.getElementById("gif12").style.visibility = "hidden";
    document.getElementById("png9").style.visibility = "hidden";
    document.getElementById("trans13").style.visibility = "hidden";

}

function funst10() {
    document.getElementById("gif13").style.visibility = "visible";
    document.getElementById("png10").style.visibility = "hidden";
    document.getElementById("trans14").style.visibility = "hidden";
    document.getElementById("arr14").style.visibility = "hidden";
    myTimeout12 = setTimeout(myGreeting12, 20000);


}
function myGreeting12() {
    document.getElementById("next9").style.visibility = "visible";
    myStopFunction13();
}
function myStopFunction13() {
    clearTimeout(myTimeout12);
}

// Step11

function step11() {
    document.getElementById("Step11").style.visibility = "visible";
    document.getElementById("Step10").style.visibility = "hidden";
    document.getElementById("next9").style.visibility = "hidden";
    document.getElementById("gif13").style.visibility = "hidden";
    document.getElementById("png10").style.visibility = "hidden";
    document.getElementById("trans14").style.visibility = "hidden";


}

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
    document.getElementById("newcubedate1").innerText = date[2] + '/' + date[1];
    document.getElementById("newcubedate2").innerText = date[2] + '/' + date[1];
    document.getElementById("newcubedate3").innerText = date[2] + '/' + date[1];
    document.getElementById("newcubedate4").innerText = date[2] + '/' + date[1];
    document.getElementById("newcubedate5").innerText = date[2] + '/' + date[1];
    document.getElementById("newcubedate6").innerText = date[2] + '/' + date[1];
}

// Step 12

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
    document.getElementById("arr20").style.visibility = "hidden";
    document.getElementById("next11").style.visibility = "visible";



    myTim = setTimeout(function () {
        myGreeting13("cubedate6");
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
    document.getElementById("arr19").style.visibility = "hidden";
    document.getElementById("arr20").style.visibility = "visible";
    myTim = setTimeout(function () {
        myGreeting13("cubedate7");
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
    document.getElementById("arr18").style.visibility = "hidden";
    document.getElementById("arr19").style.visibility = "visible";
    myTim = setTimeout(function () {
        myGreeting13("cubedate8");
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
    document.getElementById("arr17").style.visibility = "hidden";
    document.getElementById("arr18").style.visibility = "visible";
    myTim = setTimeout(function () {
        myGreeting13("cubedate9");
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
    document.getElementById("arr16").style.visibility = "hidden";
    document.getElementById("arr17").style.visibility = "visible";
    myTim = setTimeout(function () {
        myGreeting13("cubedate10");
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
    document.getElementById("arr15").style.visibility = "hidden";
    document.getElementById("arr16").style.visibility = "visible";

    myTim = setTimeout(function () {
        myGreeting13("cubedate11");
    }
        , 300);
    // myTimeout = setTimeout(myGreeting("cubedate11"), 8000);
    // document.getElementById("gif").style.visibility = "hidden";
    // document.getElementById("transp1").style.visibility = "visible";
}

function myGreeting13(id) {
    debugger;
    document.getElementById(id).style.visibility = "visible";
    myStopFunction(myTim);
}
function myStopFunction(myTim) {
    clearTimeout(myTim);
}

// Step 13

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




    myStopFunction14();
}
function myStopFunction14() {
    clearTimeout(myTimeout14);
}


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
    
    
    document.getElementById("newArr1").style.visibility = "hidden";
  
    document.getElementById("newcubedate1").style.visibility = "hidden";
    mytime = setInterval(mygreeting,2500);
    function mygreeting(){
      document.getElementById("newArr2").style.visibility =" visible";
      document.getElementById("nextStep2").style.zIndex = 1;
      cleartime();
    }
    function cleartime()
    {
      clearInterval(mytime);
    }
  }
  
  function newGif2() {
    document.getElementById("newGif1").style.visibility = "hidden";
    document.getElementById("nextStep1").style.zIndex = -1;
    document.getElementById("newGif2").style.visibility = "visible";
    document.getElementById("newArr2").style.visibility = "hidden";
    
    newTimeout15 = setTimeout(newGreeting15, 1800);
    document.getElementById("nextStep3").style.zIndex = 1;
  }
  function newGreeting15() {
    document.getElementById("textArea").innerHTML = "00N/mm";
    document.getElementById("newArr3").style.visibility = "visible";
    myStopFunction15();
  }
  function myStopFunction15() {
    clearTimeout(newTimeout15);
  }
  
  
  function newGif3() {
    document.getElementById("newGif2").style.visibility = "hidden";
    document.getElementById("newGif3").style.visibility = "visible";
  
    document.getElementById("newArr3").style.visibility = "hidden";
    newTimeout16 = setTimeout(newGreeting16, 10000);
    document.getElementById("nextStep3").style.zIndex = -1;
  }
  function newGreeting16() {
    document.getElementById("textArea").innerHTML = "333N/mm";
    document.getElementById("newStep1").style.visibility = "visible";
    document.getElementById("newStep1").style.zIndex = 1;
    myStopFunction16();
  }
  function myStopFunction16() {
    clearTimeout(newTimeout16);
  }
  
  function newStep1() {
    document.getElementById("textArea").style.visibility = "hidden";
    document.getElementById("newGif3").style.visibility = "hidden";
    document.getElementById("newImage1").style.visibility = "hidden";
    document.getElementById("newImage2").style.visibility = "visible";
    document.getElementById("newStep1").style.visibility = "hidden";
    document.getElementById("newStep1").style.zIndex = -1;
    document.getElementById("nextStep4").style.zIndex = 1;
    document.getElementById("newArr4").style.visibility = "visible";
  }
  
  function newGif4() {
    document.getElementById("newImage2").style.visibility = "hidden";
    document.getElementById("newGif4").style.visibility = "visible";
    document.getElementById("nextStep5").style.zIndex = 1;
    document.getElementById("newArr4").style.visibility = "hidden";
    document.getElementById("newcubedate2").style.visibility = "hidden";
    mytime = setInterval(mygreeting,2500);
    function mygreeting(){
      document.getElementById("newArr5").style.visibility =" visible";
      document.getElementById("nextStep5").style.zIndex = 1;
      cleartime();
    }
    function cleartime()
    {
      clearInterval(mytime);
    }
  }
  
  function newGif5() {
  
    document.getElementById("newGif4").style.visibility = "hidden";
    document.getElementById("newGif5").style.visibility = "visible";
    document.getElementById("nextStep4").style.zIndex = -1;
    document.getElementById("newArr5").style.visibility = "hidden";
    
  
    newTimeout17 = setTimeout(newGreeting2, 1800);
    function newGreeting2() {
      document.getElementById("textArea").innerHTML = "00N/mm";
      document.getElementById("textArea").style.visibility = "visible";
      document.getElementById("newArr6").style.visibility = "visible";
      myStopFunction17();
    }
    document.getElementById("nextStep6").style.zIndex = 1;
  }
  function myStopFunction17() {
    clearTimeout(newTimeout17);
  }
  
  function newGif6() {
    document.getElementById("newGif5").style.visibility = "hidden";
    document.getElementById("newGif6").style.visibility = "visible";
    document.getElementById("newArr6").style.visibility = "hidden";
    newTimeout18 = setInterval(newGreeting3, 10000);
  }
  function newGreeting3() {
    document.getElementById("textArea").innerHTML = "333N/mm";
    document.getElementById("newStep2").style.visibility = "visible";
    document.getElementById("newStep2").style.zIndex = 1;
    document.getElementById("nextStep6").style.zIndex = -1;
    myStopFunction18();
  }
  function myStopFunction18() {
    clearTimeout(newTimeout18);
  }
  
  function newStep2() {
    document.getElementById("textArea").style.visibility = "hidden";
    document.getElementById("newGif6").style.visibility = "hidden";
    document.getElementById("newImage3").style.visibility = "visible";
    document.getElementById("newStep2").style.visibility = "visible";
    document.getElementById("newStep2").style.zIndex = -1;
    document.getElementById("nextStep7").style.zIndex = 1;
    document.getElementById("newArr7").style.visibility = "visible";
  }
  
  function newGif7() {
    document.getElementById("newImage3").style.visibility = "hidden";
    document.getElementById("newGif7").style.visibility = "visible";
    document.getElementById("nextStep8").style.zIndex = 1;
    document.getElementById("newArr7").style.visibility = "hidden";
    document.getElementById("newcubedate3").style.visibility = "hidden";
    mytime = setInterval(mygreeting,2500);
    function mygreeting(){
      document.getElementById("nextStep8").style.zIndex = 1;
      document.getElementById("newArr8").style.visibility = "visible";
      cleartime();
    }
    function cleartime()
    {
      clearInterval(mytime);
    }
  }
  
  function newGif8() {
    document.getElementById("newGif7").style.visibility = "hidden";
    document.getElementById("newGif8").style.visibility = "visible";
    document.getElementById("nextStep7").style.zIndex = -1;
  
    document.getElementById("newArr8").style.visibility = "hidden";
    
  
    newTimeout19 = setInterval(newGreeting19, 1800);
    document.getElementById("nextStep9").style.zIndex = 1;
  }
  function newGreeting19() {
    document.getElementById("textArea").innerHTML = "00N/mm";
    document.getElementById("textArea").style.visibility = "visible";
    document.getElementById("newArr9").style.visibility = "visible";
    myStopFunction19();
  }
  function myStopFunction19() {
    clearTimeout(newTimeout19);
  }
  
  function newGif9() {
    document.getElementById("newGif8").style.visibility = "hidden";
    document.getElementById("newGif9").style.visibility = "visible";
    document.getElementById("newArr9").style.visibility = "hidden";
    newTimeout20 = setInterval(newGreeting20, 10000);
  }
  function newGreeting20() {
    document.getElementById("textArea").innerHTML = "333N/mm";
    document.getElementById("newStep3").style.visibility = "visible";
    document.getElementById("newStep3").style.zIndex = 1;
    document.getElementById("nextStep9").style.zIndex = -1;
    myStopFunction20();
  }
  function myStopFunction20() {
    clearInterval(newTimeout20);
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
    newTimeout21 = setTimeout(newGreeting21, 2000);
}

function newGreeting21() {
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
    _myStopFunction21();
  }
  function _myStopFunction21() {
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
    _myStopFunction22();
  }
  function _myStopFunction22() {
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
      _myStopFunction23();
    }
    document.getElementById("nextStep15").style.zIndex = 1;
  }
  function _myStopFunction23() {
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
    _myStopFunction24();
  }
  function _myStopFunction24() {
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
    _myStopFunction25();
  }
  function _myStopFunction25() {
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
    _myStopFunction26();
  }
  function _myStopFunction26() {
    clearInterval(_newTimeout26);
  }
  
  function step17() {
    document.getElementById("Step16").style.visibility = "hidden";
    document.getElementById("Step17").style.visibility = "visible";
  }