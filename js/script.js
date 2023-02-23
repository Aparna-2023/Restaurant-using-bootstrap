function validate() {
	let a = document.getElementById("name").value;
	let b = document.getElementById("email").value;
	let c = document.getElementById("msg").value;
	let name1 = /^[a-z A-Z]{2,15}$/;
	let mail = /^[A-Z a-z 0-9]+@[A-Z a-z]+\.[A-Z a-z]{2,4}$/;
	if (a == "") {
		alert("Name field is required");
		return false;
	} else if (!name1.test(a)) {
		alert("Name should be in alphabets");
		return false;
	} else if (b == "") {
		alert("Enter email address");
		return false;
	} else if (!mail.test(b)) {
		alert("Enter valid email address");
		return false;
	} else if (c == "") {
		alert(" Please enter message ");
		return false;
	} else {
		return true;
	}
}
