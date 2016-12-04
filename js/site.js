// TODO: Use a function closure and release global $
$(document).ready(function() {
  $('#bmi-form').on('submit', function(event) {
    var endpoint = $('https://bmi.p.mashape.com/');
    var weight = $('#bmi-weight');
    var height = $('#bmi-height');
    var key = $('WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo')    
    
    $.get(function(data) {
        $('#bmi').append(
          var url = endpoint + weight + height + key;
          loadJSON(url,gotData)
        );
      });
    event.preventDefault();
  });
});

/*xhr.setRequestHeader("X-Mashape-Authorization", "WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo");*/