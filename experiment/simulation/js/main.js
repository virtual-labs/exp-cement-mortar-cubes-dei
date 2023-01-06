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


    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}

function myGreeting1() {
    document.getElementById("arr3").style.visibility = "visible";
    document.getElementById("trans3").style.visibility = "visible";


    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout1);

}

function myGreeting2() {
    document.getElementById("arr4").style.visibility = "visible";
    document.getElementById("trans4").style.visibility = "visible";


    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout2);

}

function myGreeting3() {
    document.getElementById("next1").style.visibility = "visible";


    myStopFunction();
}

function myStopFunction() {
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
    myStopFunction();
}
function myStopFunction() {
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
    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout5);


}
function myGreeting6() {
    document.getElementById("next3").style.visibility = "visible";
    myStopFunction();
}

function myStopFunction() {
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
    myStopFunction();
}
function myStopFunction() {
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
    myStopFunction();
}
function myStopFunction() {
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
    myStopFunction();
}
function myStopFunction() {
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
    myStopFunction();
}
function myStopFunction() {
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
    myStopFunction();
}
function myStopFunction() {
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
    myStopFunction();
}
function myStopFunction() {
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




    myStopFunction();
}
function myStopFunction() {
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
}

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