function CreatePopup(PopupData) {
	const Container = document.getElementById("PopupContainer");

	// Create
	const Popup = document.createElement("div");
	Popup.className = "Popup";

	Popup.innerHTML = `
		<div class="PopupTitle">${PopupData["Title"]}</div>
		<div class="PopupContent">${PopupData["Content"]}</div>
	`;

	Container.appendChild(Popup);


	// Click to remove
	Popup.addEventListener("click", () => {
		RemovePopup(Popup)
	});

	// Remove if too many
	const MaxPopups = 16;

	while (Container.children.length > MaxPopups) {
		const OldPopup = Container.children[0];
		OldPopup.style.animation = "PopupOut 0.25s forwards";

		setTimeout(() => {OldPopup.remove();}, 250);
	}

	// Remove after 2mins
	/*setTimeout(() => {RemovePopup(Popup)}, 120000);*/
}

function RemovePopup(Popup) {
	if (Popup.dataset.removing) return;

	Popup.dataset.removing = true;
	Popup.style.animation = "none";
	Popup.offsetHeight;
	Popup.style.animation = "PopupOut 0.25s forwards";

	setTimeout(() => {
		Popup.remove();
	}, 250);
}