const MessageInput = document.getElementById("MessageInput");
const SendButton = document.getElementById("SendButton");

function SendMessage() {

	const Message = MessageInput.value.trim();

	if (Message === "") {
		return;
	}

	window.pywebview.api.OnSendMessage({
		Message: Message
	});

	MessageInput.value = "";
	MessageInput.style.height = "auto";
	MessageInput.style.height = Math.min(MessageInput.scrollHeight, window.innerHeight * 0.4) + "px";

	document.getElementById("CharacterCount").innerText = "0/1000";
	document.getElementById("CharacterCount").style.color = "var(--Green-3)";


	// Scroll to bottom
	const MessageArea = document.querySelector(".MessageArea");
	MessageArea.scrollTop = MessageArea.scrollHeight;
}

SendButton.addEventListener("click", SendMessage);

MessageInput.addEventListener("keydown", (Event) => {

	if (Event.key === "Enter" && !Event.shiftKey) {

		Event.preventDefault();

		SendMessage();
	}
});