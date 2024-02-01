	//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value != "pixie") {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		return false;
	}
	if (password.value != "123") {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		return false;
	}

}
function email_Verify(){
	if (email.value === "pixie") {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value === "123") {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

