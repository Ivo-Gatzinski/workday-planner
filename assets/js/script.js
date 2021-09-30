//add current day to header

var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

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
