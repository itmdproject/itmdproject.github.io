// TODO: Use a function closure and release global $
$.noConflict();
$(document).ready(function() {
  $('#bmi-form').on('submit', function(event) {
    var endpoint = $('https://bmi.p.mashape.com/');
    var weight = $('#bmi-weight');
    var height = $('#bmi-height');
    var key = $('WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo')    
    var url = endpoint + weight + height + key;
    
    $.get(url);
    event.preventDefault();
  });
});
