$('#firstName').hide();
$('#lastName').hide();
$('#submitButton').hide();

document.addEventListener('input',function() {
document.querySelector("#inputEmail").onchange=check;},false);

function check(event) {
 if ($("#inputEmail").val()) {
      $('#firstName').fadeIn(200);
      $('#lastName').fadeIn(200);
      $('#submitButton').fadeIn(200);

    } else {
      $('#firstName').hide();
      $('#lastName').hide();
      $('#submitButton').hide();
    }
   }
