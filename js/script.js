var path1 = "You should check out Ruby Rails, PHP/Drupal, Java/Android"
var path2 = "You Should check out CSS/Design or C#/.NET"
var path3 = "You Should check out Ruby Rails, PHP/Drupal, Java/Android, CSS/Design, or C#/.NET"



$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    var experience = parseInt($("#epicodus-exp").val());
    var timeOfDayLength = parsenInt($("#epidcodus-timeOfDay").val().length());
    var daysAvailable = $("#epicodus-available").val();
    var interest = $("#epicodus-interest").val();
    var startDay = $("input:radio[name=start-day]:checked").val();

    console.log(experience);
    console.log(timeOfDayLength);
    console.log(daysAvailable);
    console.log(interest);
    console.log(startDay);

    if (experience >= 1) {
      $("#output").show();
    }
    event.preventDefault();
  });
});
