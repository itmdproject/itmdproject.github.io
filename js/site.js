// TODO: Use a function closure and release global $
$.noConflict();
(function($){
  $(document).ready(function() {
    $('#bmi-form').on('submit', function(event) {
      //saving inputs
      var weight = $('#bmi-weight').val();
      var height = $('#bmi-height').val();
      
      $.get(
          'https://bmi.p.mashape.com/WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo' + '+weight+' 
          + '+height+',
          function(data,json){
            $('#bmi').append(
            '<p>Your BMI is: '+data.bmi.value+'</p>'
            '<p>Your status is: '+data.bmi.status+'</p>'
            '<p>Your risk is: '+data.bmi.risk+'</p>'
          );
      });     
    });
  event.preventDefault();
  });
});(jQuery);
