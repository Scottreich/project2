
$(document).ready(function() {
  $("form#user-input").submit(function(event) {
      event.preventDefault();

    var experience = $("#epicodus-exp").val();
    // alert(experience);
    var timeOfDayLength = $("#epicodus-hours").val();
    // alert(timeOfDayLength);
    var daysAvailable = $("#epicodus-available").val();
    // alert(daysAvailable);
    var interest = $("#epicodus-age").val();
    // alert(interest);
    var startDay = $("#epicodus-start").val();
    if (experience > 5) {
      $(".hideTracks").hide();
      $("#trackOne").show();
    } else if (timeOfDayLength < 5) {
      $(".hideTracks").hide();
      $("#trackTwo").show();
    } else {
      $(".hideTracks").hide();
      $("#trackThree").show();

    }

  });
});
