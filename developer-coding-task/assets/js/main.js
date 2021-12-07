$('#fullName').hide();
$('#submitButton').hide();

document.addEventListener('input',function() {
document.querySelector("#inputEmail").onchange=check;},false);

function check(event) {
 if ($("#inputEmail").val()) {
   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

let email = document.getElementById('inputEmail').value;

if(regex.test(email)) {
  $('#validation').hide()
  $('#fullName').fadeIn(200);
  $('#submitButton').fadeIn(200);
} else {
  $('#validation').text('Email is invalid')
  $('#fullName').hide();
  $('#submitButton').hide();
}

    }
   }
