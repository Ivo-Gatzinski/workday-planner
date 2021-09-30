// use TODO list exercise
// use LI exercise
// use John workshop

//add current day to header

var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

//PART ONE:

//Color code each block comparing it to current time and updating classes:

for (i = 9; i < 18; i++) {
var currentHour = moment().format("H");
var blockHour = i;
  if (currentHour < blockHour) {
    $("#hour-" + i).addClass("future");
  } else if (currentHour > blockHour) {
    $("#hour-" + i).addClass("past");
  } else {
    $("#hour-" + i).addClass("present");
  }
}

// var block9 = function () {
//   var currentHour = moment().format("H");

//   var blockHour = 9;

//   if (currentHour < blockHour) {
//     $("#hour-9").addClass("future");
//   } else if (currentHour > blockHour) {
//     $("#hour-9").addClass("past");
//   } else {
//     $("#hour-9").addClass("present");
//   }
// };

// block9();

// var block10 = function () {
//   var currentHour = moment().format("H");

//   var blockHour = 10;

//   if (currentHour < blockHour) {
//     $("#hour-10").addClass("future");
//   } else if (currentHour > blockHour) {
//     $("#hour-10").addClass("past");
//   } else {
//     $("#hour-10").addClass("present");
//   }
// };

// block10();

// var block11 = function () {
//   //let currentHour = get the current hour
//   var currentHour = moment().format("H");

//   console.log(currentHour);

//   //get number from the name of ID in a given workday hour row element:

//   var blockHour = $("#hour-11").attr("ID");

//   console.log(blockHour);

//   var block = blockHour.match(/\d+/);

//   console.log(block);

//   var blockNumber = block.toString();

//   console.log(blockNumber);

//   //compare given row number from ID to the current hour time:

//   // IF current hour 15:00 < blockHour 21:00

//   if (currentHour < blockNumber) {
//     // THEN we add FUTURE class to blockHour
//     $("#hour-11").addClass("future");

//     // ELSE IF currentHour > blockHour
//   } else if (currentHour > blockNumber) {
//     // THEN "past" class to block element
//     $("#hour-11").addClass("past");
//   }
//   // ELSE  [ this is result of previous two ifs: currentHour = blockHour]
//   else {
//     // THEN "present" class to block element

//     $("#hour-11").addClass("present");
//   }
// };

// block11();

// var block12 = function () {
//   //let currentHour = get the current hour
//   var currentHour = moment().format("H");

//   console.log(currentHour);

//   //get number from the name of ID in a given workday hour row element:

//   var blockHour = $("#hour-12").attr("ID");

//   console.log(blockHour);

//   var block = blockHour.match(/\d+/);

//   console.log(block);

//   var blockNumber = block.toString();

//   console.log(blockNumber);

//   //compare given row number from ID to the current hour time:

//   // IF current hour 15:00 < blockHour 21:00

//   if (currentHour < blockNumber) {
//     // THEN we add FUTURE class to blockHour
//     $("#hour-12").addClass("future");

//     // ELSE IF currentHour > blockHour
//   } else if (currentHour > blockNumber) {
//     // THEN "past" class to block element
//     $("#hour-12").addClass("past");
//   }
//   // ELSE  [ this is result of previous two ifs: currentHour = blockHour]
//   else {
//     // THEN "present" class to block element

//     $("#hour-12").addClass("present");
//   }
// };

// block12();

// var block13 = function () {
//   //let currentHour = get the current hour
//   var currentHour = moment().format("H");

//   console.log(currentHour);

//   //get number from the name of ID in a given workday hour row element:

//   var blockHour = $("#hour-13").attr("ID");

//   console.log(blockHour);

//   var block = blockHour.match(/\d+/);

//   console.log(block);

//   var blockNumber = block.toString();

//   console.log(blockNumber);

//   //compare given row number from ID to the current hour time:

//   // IF current hour 15:00 < blockHour 21:00

//   if (currentHour < blockNumber) {
//     // THEN we add FUTURE class to blockHour
//     $("#hour-13").addClass("future");

//     // ELSE IF currentHour > blockHour
//   } else if (currentHour > blockNumber) {
//     // THEN "past" class to block element
//     $("#hour-13").addClass("past");
//   }
//   // ELSE  [ this is result of previous two ifs: currentHour = blockHour]
//   else {
//     // THEN "present" class to block element

//     $("#hour-13").addClass("present");
//   }
// };

// block13();

// var block14 = function () {
//   //let currentHour = get the current hour
//   var currentHour = moment().format("H");

//   console.log(currentHour);

//   //get number from the name of ID in a given workday hour row element:

//   var blockHour = $("#hour-14").attr("ID");

//   console.log(blockHour);

//   var block = blockHour.match(/\d+/);

//   console.log(block);

//   var blockNumber = block.toString();

//   console.log(blockNumber);

//   //compare given row number from ID to the current hour time:

//   // IF current hour 15:00 < blockHour 21:00

//   if (currentHour < blockNumber) {
//     // THEN we add FUTURE class to blockHour
//     $("#hour-14").addClass("future");

//     // ELSE IF currentHour > blockHour
//   } else if (currentHour > blockNumber) {
//     // THEN "past" class to block element
//     $("#hour-14").addClass("past");
//   }
//   // ELSE  [ this is result of previous two ifs: currentHour = blockHour]
//   else {
//     // THEN "present" class to block element

//     $("#hour-14").addClass("present");
//   }
// };

// block14();

// var block15 = function () {
//   //let currentHour = get the current hour
//   var currentHour = moment().format("H");

//   console.log(currentHour);

//   //get number from the name of ID in a given workday hour row element:

//   var blockHour = $("#hour-15").attr("ID");

//   console.log(blockHour);

//   var block = blockHour.match(/\d+/);

//   console.log(block);

//   var blockNumber = block.toString();

//   console.log(blockNumber);

//   //compare given row number from ID to the current hour time:

//   // IF current hour 15:00 < blockHour 21:00

//   if (currentHour < blockNumber) {
//     // THEN we add FUTURE class to blockHour
//     $("#hour-15").addClass("future");

//     // ELSE IF currentHour > blockHour
//   } else if (currentHour > blockNumber) {
//     // THEN "past" class to block element
//     $("#hour-15").addClass("past");
//   }
//   // ELSE  [ this is result of previous two ifs: currentHour = blockHour]
//   else {
//     // THEN "present" class to block element

//     $("#hour-15").addClass("present");
//   }
// };

// block15();

// var block16 = function () {
//   //let currentHour = get the current hour
//   var currentHour = moment().format("H");

//   console.log(currentHour);

//   //get number from the name of ID in a given workday hour row element:

//   var blockHour = $("#hour-16").attr("ID");

//   console.log(blockHour);

//   var block = blockHour.match(/\d+/);

//   console.log(block);

//   var blockNumber = block.toString();

//   console.log(blockNumber);

//   //compare given row number from ID to the current hour time:

//   // IF current hour 15:00 < blockHour 21:00

//   if (currentHour < blockNumber) {
//     // THEN we add FUTURE class to blockHour
//     $("#hour-16").addClass("future");

//     // ELSE IF currentHour > blockHour
//   } else if (currentHour > blockNumber) {
//     // THEN "past" class to block element
//     $("#hour-16").addClass("past");
//   }
//   // ELSE  [ this is result of previous two ifs: currentHour = blockHour]
//   else {
//     // THEN "present" class to block element

//     $("#hour-16").addClass("present");
//   }
// };

// block16();

// var block17 = function () {
//   //let currentHour = get the current hour
//   var currentHour = moment().format("H");

//   console.log(currentHour);

//   //get number from the name of ID in a given workday hour row element:

//   var blockHour = $("#hour-17").attr("ID");

//   console.log(blockHour);

//   var block = blockHour.match(/\d+/);

//   console.log(block);

//   var blockNumber = block.toString();

//   console.log(blockNumber);

//   //compare given row number from ID to the current hour time:

//   // IF current hour 15:00 < blockHour 21:00

//   if (currentHour < blockNumber) {
//     // THEN we add FUTURE class to blockHour
//     $("#hour-17").addClass("future");

//     // ELSE IF currentHour > blockHour
//   } else if (currentHour > blockNumber) {
//     // THEN "past" class to block element
//     $("#hour-17").addClass("past");
//   }
//   // ELSE  [ this is result of previous two ifs: currentHour = blockHour]
//   else {
//     // THEN "present" class to block element

//     $("#hour-17").addClass("present");
//   }
// };

// block17();

// PART TWO:

//take input from calendar input textarea class
//add to a key in localStorage
//every time user loads the page, we rewrite each hour row with string from localStorage

var hour9 = localStorage.getItem("hour-9");
if (hour9) {
  $("#hour-9").children("textarea").val(hour9);
}

var hour10 = localStorage.getItem("hour-10");
if (hour10) {
  $("#hour-10").children("textarea").val(hour10);
}

var hour11 = localStorage.getItem("hour-11");
if (hour11) {
  $("#hour-11").children("textarea").val(hour11);
}

var hour12 = localStorage.getItem("hour-12");
if (hour12) {
  $("#hour-12").children("textarea").val(hour12);
}

var hour13 = localStorage.getItem("hour-13");
if (hour13) {
  $("#hour-13").children("textarea").val(hour13);
}

var hour14 = localStorage.getItem("hour-14");
if (hour14) {
  $("#hour-14").children("textarea").val(hour14);
}

var hour15 = localStorage.getItem("hour-15");
if (hour15) {
  $("#hour-15").children("textarea").val(hour15);
}

var hour16 = localStorage.getItem("hour-16");
if (hour16) {
  $("#hour-16").children("textarea").val(hour16);
}

var hour17 = localStorage.getItem("hour-17");
if (hour17) {
  $("#hour-17").children("textarea").val(hour17);
}

// WHEN user clicks a save button,
$(".saveBtn").on("click", function () {
  // traverse from button element to the input
  var input = $(this).parent().children("textarea");
  // get user input from the input element
  var task = input.val();
  // get id of input
  var id = $(this).parent().attr("id");
  // save to local storage using id as the key
  localStorage.setItem(id, task);
});
