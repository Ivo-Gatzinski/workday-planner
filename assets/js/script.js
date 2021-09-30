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

//get stored data from localStorage:

for (i = 9; i < 18; i++) {

var hour = localStorage.getItem("hour-" + i);
if (hour) {
  var selectedHour = $("#hour-" + i);
  selectedHour.children("textarea").val(hour);
}

};


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
