


$(document).ready(function() {
  $("form#user-input").submit(function(event) {
      event.preventDefault();
    var experience = $("#epicodus-exp").val();
    var timeOfDayLength = $("#epidcodus-hours").val();
    var daysAvailable = $("#epicodus-available").val();
    var interest = $("#epicodus-age").val();
    var startDay = $("input:radio[name=start-day]:checked").val();
    var path1 = "Ruby Rails, PHP/Drupal, Java/Android";
    var path2 = "CSS/Design or C#/.NET";
    var path3 = "Ruby Rails, PHP/Drupal, Java/Android, CSS/Design, or C#/.NET";
    // var add = experience + timeOfDayLength + daysAvailable + interest + startDay;

    if (experience > 5) {
        $("#output1").show();
        $("#span1").text(path1);
    } else if (daysAvailable >= 1) {
        $("#output2").show();
        $("#span2").text(path2);
    } else (experience < 5)
        $("#output3").show();
        $("#span3").text(path3);
        // $("#span1").text(path2);
    // } else (experience < 5) {
    //     $("#output").show();
    //     $("#span1").text(path3);
  })
  });
