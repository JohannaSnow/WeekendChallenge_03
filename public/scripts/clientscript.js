console.log ('This is sourced!');

//console.log('sourced');
var calculation = '';


$(document).ready(function(){
  console.log('Document ready!');

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

      //put in calculation array
      calculation += nextInput;
      console.log(calculation);
      //display current calculation
      $('.outputScreen').html(calculation);
      }
    });

    var returnResults = function () {
      console.log('in returnResults');
      var calculationSent = {takeThis: calculation};
      console.log(calculationSent);
      $.ajax({
        type: 'POST',
        url: '/calculate',
        data: calculationSent,
        success: function (data) {
          console.log(data);
          var endResults = data.takeThis;
          console.log(endResults);
          $('.outputScreen').html(endResults);
          // $('.outputScreen').empty();
        },
        error: function (data) {
          console.log('');
          $('.outputScreen').html('Try again please');

        }
      });
    };



  });

 // end document ready
