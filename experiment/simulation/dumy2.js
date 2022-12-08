var age = 0;
var logo = 0;
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
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("in2").style.visibility = "hidden";


    }

    else {
        document.getElementById("fillBox").innerHTML = "Please Enter Date";
        //alert("Wrong");

    }
}