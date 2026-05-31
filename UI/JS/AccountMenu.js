document.querySelector("#ExitAccount").addEventListener("click", (event) => {
	let AccountMenu = document.querySelector("#AccountOverlay")
	AccountMenu.classList.remove("Active")
});

document.querySelector("#OpenAccount").addEventListener("click", (event) => {
	let AccountMenu = document.querySelector("#AccountOverlay")
	AccountMenu.classList.add("Active")
});


document.querySelector("#LogoutButton").addEventListener("click", (event) => {
	window.pywebview.api.LogoutButtonPressed();
});

document.querySelector("#ResetPasswordButton").addEventListener("click", (event) => {
	window.pywebview.api.ResetPasswordButtonPressed();
});