console.log ('This is sourced!');

//console.log('sourced');
var calculation = '';


$(document).ready(function(){
  console.log('Document ready!');

  //console.log('sourced');
  var calculation = '';


  //get calculator button input
    $('button').on('click', function () {
      if ($(this).attr('data') === "="){
        returnResults();
      }else if ($(this).attr('data') === 'CE') {
        calculation = '';
        $('.outputScreen').html(calculation);
      }else{
      //console.log('in button click');
      var nextInput = $(this).attr('data');

      //put in calculationIn array
      calculation += nextInput;
      console.log(calculation);
      //display current calculation
      $('.outputScreen').html(calculation);
      }
    });

    var results = function () {
      console.log('in results');
      var calculationSent = {takeThis: calculation};
      console.log(calculationSent);
      $.ajax({
        type: 'POST',
        url: '/calculate',
        data: calculationSent,
        success: function (data) {
          console.log(data);
          var finalResults = data.takeThis;
          console.log(finalResults);
          $('.outputScreen').html(finalResults);
        },
        error: function (data) {
          console.log('');
          $('.outputScreen').html('Try again please');

        }
      });
    };



  });

 // end document ready
