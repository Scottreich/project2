$(document).ready(function() {
  $("#user-input").submit(function(event) {
    var experience = parseInt($("#epicodus-exp").val());
    var timeOfDayLength = parsenInt($("#epidcodus-timeOfDay").val().length());
    var daysAvailable = $("#epicodus-available").val();
    var interest = $("#epicodus-interest").val();
    var startDay = $("input:radio[name=start-day]:checked").val();
    var output = "";

    if (startDay === "epicodus-today") {
      output = "You should check out Ruby/Rails, PHP/Drupal, Java/Android";
    } else if (startDay !== "epicodus-today") {
      output = "You should check out CSS/Design or C#/.NET";
    }
  });
});
