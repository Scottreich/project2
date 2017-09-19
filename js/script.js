
$(document).ready(function() {
  $("#user-input").submit(function(event) {
      event.preventDefault();
    var experience = $("#epicodus-exp").val();
    alert(experience);
    var timeOfDayLength = $("#epicodus-hours").val();
    alert(timeOfDayLength);
    var daysAvailable = $("#epicodus-available").val();
    alert(daysAvailable);
    var interest = $("#epicodus-age").val();
    alert(interest);
    var startDay = $("input:radio[name=start-day]:checked").val();
    alert(startDay);
    // var path1 = "Ruby Rails, PHP/Drupal, Java/Android";
    // var path2 = "CSS/Design or C#/.NET";
    // var path3 = "Ruby Rails, PHP/Drupal, Java/Android, CSS/Design, or C#/.NET";
    // var add = "experience + timeOfDayLength + daysAvailable + interest + startDay";

    // if (add === 5) {
    //     $("#output1").show();
    //     $("#span1").text(path1);
    // // } else if (daysAvailable > 1) {
    //     $("#output1").show();
    //     $("#span1").text(path2);
    // } else (experience < 3)
    //     $("#output1").show();
    //     $("#span1").text(path3);
        // $("#span1").text(path2);
    // } else (experience < 5) {
    //     $("#output").show();
    //     $("#span1").text(path3);
  });
});
