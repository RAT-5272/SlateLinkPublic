document.querySelector(".ConversationList").addEventListener("click", (event) => {
	const Item = event.target.closest(".ConversationItem");

	if (!Item) return;

	console.log("Conversation clicked!");

	const Username = Item.querySelector(".Username")?.innerText;

	window.pywebview.api.OnConversationSelected({
		Username: Username
	});

});