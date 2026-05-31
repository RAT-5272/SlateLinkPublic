document.getElementById("StartConversationButton").addEventListener("click", () => {
	window.pywebview.api.OnConversationSearch({
		Username: document.getElementById("StartConversationInput").value
	});

	document.querySelector("StartConversationInput").value = "";
});