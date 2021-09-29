// use TODO list exercise
// use LI exercise
// use John workshop

//add current day to header
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today); 

//let currentHour = get the current hour

var block16 = function () {

var currentHour = moment().format("H");

console.log(currentHour);

//get number from the name of ID in a given workday hour row element:

var blockHour = $("#hour-16").attr("ID");

console.log(blockHour);

var block = blockHour.match(/\d+/);

console.log(block);

var blockNumber = block.toString();

console.log(blockNumber);

//compare given row number from ID to the current hour time:

// IF current hour 15:00 < blockHour 21:00

if (currentHour < blockNumber) {

    // THEN we add FUTURE class to blockHour
    $("#hour-16").addClass("future");
    
// ELSE IF currentHour > blockHour
} else if (currentHour > blockNumber)
{ 
    // THEN "past" class to block element
    $("#hour-16").addClass("past");

} 
// ELSE  [ this is result of previous two ifs: currentHour = blockHour]
else 
{
// THEN "present" class to block element

$("#hour-16").addClass("present");

};

};

block16();

var block17 = function () {

    var currentHour = moment().format("H");
    
    console.log(currentHour);
    
    //get number from the name of ID in a given workday hour row element:
    
    var blockHour = $("#hour-17").attr("ID");
    
    console.log(blockHour);
    
    var block = blockHour.match(/\d+/);
    
    console.log(block);
    
    var blockNumber = block.toString();
    
    console.log(blockNumber);
    
    //compare given row number from ID to the current hour time:
    
    // IF current hour 15:00 < blockHour 21:00
    
    if (currentHour < blockNumber) {
    
        // THEN we add FUTURE class to blockHour
        $("#hour-17").addClass("future");
        
    // ELSE IF currentHour > blockHour
    } else if (currentHour > blockNumber)
    { 
        // THEN "past" class to block element
        $("#hour-17").addClass("past");
    
    } 
    // ELSE  [ this is result of previous two ifs: currentHour = blockHour]
    else 
    {
    // THEN "present" class to block element
    
    $("#hour-17").addClass("present");
    
    };
    
    };
    
block17();

// PART ONE
//when loading website
//we see grey if that block is BEFORE current time
// - check time
// - everything before current time becomes grey css
//      - add class past to the right row
//      - add class present to the right row
//      - add class future to the right row
//            

// if time = future, then add future class (which already makes it green by the given css)

// timeArray = [ "9", ... "17"]

// var currentTime = moment().hour();

// for (i = 0; i < timeArray.length; i++)
//  {
//      if (currentTime === timeArray[i]){

        // SEARCH javascript FOR RIGHT SYNTAX
//         $("#hour-i") // UPDATE CLASSES - add a class name that says "present" or "future" or "past"
//      }
//  }



// - everything after current time becomes green css
//we see red if that block is DURING current time
//we see green if that block is AFTER current time
// 

// PART TWO

//take input from calendar input textarea class
//add to a key in localStorage
//localStorage.setItem("hour9", "meeting with John")

// var input = getElementbyID("#Hour-9").text("userinput from textarea")

//localStorage.setItem("#Hour-9", input)

//every time user loads the page, we rewrite each hour row with string from localStorage