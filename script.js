import "./style.scss";

let checkbox = document.querySelector('.container .form input[type="checkbox"]');
let password = document.querySelector('.container .form input[type="password"]');
let close = document.querySelector("#modal button");
let form = document.querySelector(".container .form form");
let isCorrect = false;
let isCorrectPassword = [false, false, false];

checkbox.onclick = (e) => {
	if (e.target.checked === true) {
		password.type = "text";
	} else {
		password.type = "password";
	}
};

form.addEventListener("submit", (e) => {
	let markEmail = document.querySelector("#modal section p mark#email");
	let markName = document.querySelector("#modal section p mark#name");

	if (e.target[0].value === "") {
		e.target[0].nextElementSibling.style.display = "block";
		e.target[0].nextElementSibling.nextElementSibling.style.maxHeight = "1.3rem";
		e.target[0].nextElementSibling.nextElementSibling.style.opacity = 1;

		isCorrect = false;
	} else {
		isCorrect = true;
	}

	if (e.target[1].value === "") {
		e.target[1].nextElementSibling.style.display = "block";
		e.target[1].nextElementSibling.nextElementSibling.style.maxHeight = "1.3rem";
		e.target[1].nextElementSibling.nextElementSibling.style.opacity = 1;
		isCorrect = false;
	} else {
		isCorrect = true;
	}

	if (e.target[2].value === "") {
		e.target[2].nextElementSibling.style.display = "block";
		e.target[2].nextElementSibling.nextElementSibling.style.maxHeight = "1.3rem";
		e.target[2].nextElementSibling.nextElementSibling.style.opacity = 1;
		isCorrect = false;
	} else {
		isCorrect = true;
	}

	if (e.target[3].value === "") {
		e.target[3].nextElementSibling.style.maxHeight = "1.3rem";
		e.target[3].nextElementSibling.style.opacity = 1;

		isCorrect = false;
	}

	e.preventDefault();
	e.stopPropagation();

let	isCorrectPasswordArray = isCorrectPassword.every((element) => {
		if (element === true) {
			return true;
		} else {
			return false;
		}
	});

	if (isCorrect && isCorrectPasswordArray) {
		let emaiResult = e.target[2].value;
		let nameResult = `${e.target[0].value} ${e.target[1].value}`;
		e.target[0].value = "";
		e.target[1].value = "";
		e.target[2].value = "";
		e.target[3].value = "";
		markEmail.innerHTML = emaiResult;
		markName.innerHTML = nameResult;
		modal.showModal();
		return true;
	} else {
		return false;
	}
});
password.addEventListener("keyup", (even) => {
	let li = document.querySelectorAll(".container .form label li");

	if (containsSomething(even.target.value, "[A-Z]")) {
		li[0].style.color = "green";
		li[0].style.setProperty("--icon-error", "url(../images/icons8-checkmark.svg)");
		isCorrectPassword[0] = true;
	} else {
		li[0].style.color = "hsl(0, 100%, 74%)";
		li[0].style.setProperty("--icon-error", "url(../images/icon-error-pw.svg)");
		isCorrectPassword[0] = false;
	}

	if (containsSomething(even.target.value, "[0-9]")) {
		li[1].style.color = "green";
		li[1].style.setProperty("--icon-error", "url(../images/icons8-checkmark.svg)");
		isCorrectPassword[1] = true;
	} else {
		li[1].style.color = "hsl(0, 100%, 74%)";
		li[1].style.setProperty("--icon-error", "url(../images/icon-error-pw.svg)");
		isCorrectPassword[1] = false;
	}

	if (containsSomething(even.target.value, "[?<!>@#$%^&*]")) {
		li[2].style.color = "green";
		li[2].style.setProperty("--icon-error", "url(../images/icons8-checkmark.svg)");
		isCorrectPassword[2] = true;
	} else {
		li[2].style.color = "hsl(0, 100%, 74%)";
		li[2].style.setProperty("--icon-error", "url(../images/icon-error-pw.svg)");
		isCorrectPassword[2] = false;
	}
});

function containsSomething(word, regexp) {
	let i = 0;
	let bool = false;
	let regxp = new RegExp(regexp);
	while (i < word.length) {
		if (regxp.test(word.charAt(i))) {
			bool = true;
		}
		i++;
	}
	return bool;
}

close.addEventListener("click", (a) => {
	modal.close();
});
