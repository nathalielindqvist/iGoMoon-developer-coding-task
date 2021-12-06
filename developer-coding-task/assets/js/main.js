$('#firstName').hide();
$('#lastName').hide();
$('#submitButton').hide();

document.addEventListener('input',function() {
document.querySelector("#inputEmail").onchange=check;},false);


function check(event) {
 if ($("#inputEmail").val()) {
      $('#firstName').show();
      $('#lastName').show();
      $('#submitButton').show();

    } else {
      $('#firstName').hide();
      $('#lastName').hide();
      $('#submitButton').hide();
    }
   }
