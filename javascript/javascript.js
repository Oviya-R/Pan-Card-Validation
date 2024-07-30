$(document).ready(function() {
    $('#button').click(function() {
      var pancardnumber = $('#pannumber').val().trim().toUpperCase();
      var pansize = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
      if (pansize.test(pancardnumber)) {
        $("#message").text("Valid PAN Card Number");
      } else {
        $("#message").text("Invalid PAN Number");
      }
    });
  });
  