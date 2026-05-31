const LoginScreen = document.querySelector("#LoginScreen")

function OpenLoginScreen() {
	LoginScreen.classList.add("Active")
}

function CloseLoginScreen() {
	LoginScreen.classList.remove("Active")
}

document.querySelector("#LoginButton").addEventListener("click", (event) => {
	window.pywebview.api.LoginButtonPressed({
		Username: document.querySelector("#UsernameInput").value,
		Password: document.querySelector("#PasswordInput").value,
		SaveLogin: (document.querySelector("#SaveLoginInformation").checked)
	});
});
