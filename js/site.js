// TODO: Use a function closure and release global $
$.noConflict();
(function($){
  $(document).ready(function() {
    $('#bmi-form').on('submit', function(event) {
      //saving inputs
      var weight = document.getElementById('bmi-weight');
      var height = document.getElementById('bmi-height');
      
      event.preventDefault();
      
       $.get(
          'https://bmi.p.mashape.com/' + weight + height + WyFUMDOkdrmshARoxfXDWLZmMeccp180tJEjsnCz3MCFuXJdEo
        );
      function getBMI(data){
        var x = data[0];
        console.log(q.weight);
        console.log(q.height);
      };
    });
  });
});
