document.querySelector("#ExitSettings").addEventListener("click", (event) => {
	let SettingsMenu = document.querySelector("#SettingsOverlay")
	SettingsMenu.classList.remove("Active")
});

document.querySelector("#OpenSettings").addEventListener("click", (event) => {
	let SettingsMenu = document.querySelector("#SettingsOverlay")
	SettingsMenu.classList.add("Active")
});