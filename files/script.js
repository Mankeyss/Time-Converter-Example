var firstTime = document.getElementById("first-time");
var secondTime = document.getElementById("second-time");
var outPutToMilliseconds = 0;
var result = 0;


function calc() {
    //alert((document.querySelector('input').value*60) + " Minutes");
    var select2 = document.getElementById("second-unit")
    var outPutUnit2 = select2.options[select2.selectedIndex].text

    var select = document.getElementById("first-unit")
    var outPutUnit = select.options[select.selectedIndex].text

    
    if(outPutUnit === "Hour(s)") {
        outPutToMilliseconds = (document.querySelector('input').value)*60*60*60;
    }
    if(outPutUnit === "Minute(s)") {
        outPutToMilliseconds = (document.querySelector('input').value)*60*60;
    }
    if(outPutUnit === "Second(s)") {
        outPutToMilliseconds = (document.querySelector('input').value)*60;
    }
    if(outPutUnit === "Millisecond(s)") {
        outPutToMilliseconds = (document.querySelector('input').value);
    }
    
    if(outPutUnit2 === "Hour(s)") {
        result = outPutToMilliseconds/60/60/60
    }
    if(outPutUnit2 === "Minute(s)") {
        result = outPutToMilliseconds/60/60
    }
    if(outPutUnit2 === "Second(s)") {
        result = outPutToMilliseconds/60
    }
    if(outPutUnit2 === "Millisecond(s)") {
        result = outPutToMilliseconds
    }

    if(result.toString() === "NaN") {
        document.getElementById("result-display").innerText = "Please only use numbers!";
    } else {
        document.getElementById("result-display").innerText = result + " " + outPutUnit2;
    }
}

//Hours: => Minutes = *60
//Hours: => Seconds = *60*60
//Hours: => Milliseconds = *60*60*60

//Minutes: => Hours = /60
//Minutes: => Seconds = *60
//Minutes: => Milliseconds = *60*60

//Seconds: => Hours = /60/60
//Seconds: => Minutes = /60
//Seconds: => Milliseconds = *60

//Milliseconds: => Hours = /60/60/60
//Milliseconds: => Minutes = /60/60
//Milliseconds: => Seconds = /60
