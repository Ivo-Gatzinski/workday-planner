// use TODO list exercise
// use LI exercise
// use John workshop

//add current day to header
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today); 


//let currentHour = get the current hour

// GIVEN currentHour = 3

// GIVEN an blockHour element = 9

// BEHAVIOR WE WANT: WHAT CLASS should we set on 9AM? 

// EXPECTED RESULT: ADD PAST CLASS on 9AM element

// What are the steps to get to our result?

// Compare  HOUR ASSOCIATED WITH TIME BLOCK to CURRENTHOUR

// let blockHour = get time block hour (in our example, this is 9)

// IF current hour 15:00 < blockHour 21:00

// THEN we add FUTURE class to blockHour

// ELSE IF currentHour > blockHour

// THEN "past" class to block element

// ELSE  [ this is result of previous two ifs: currentHour = blockHour]

// THEN "present" class to block element


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