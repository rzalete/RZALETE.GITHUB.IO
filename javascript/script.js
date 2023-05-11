function validateForm(event) {
	event.preventDefault();

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var interest = document.getElementById("interest").value;

	if (name === "" || email === "" || interest === "") {
		alert("Tidak boleh ada form yang kosong!");
	} else {
		document.getElementById("myForm").submit();
	}
}
