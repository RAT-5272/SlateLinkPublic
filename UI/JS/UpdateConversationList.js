function UpdateConversationList(ConversationList) {
	const ConversationListElement = document.querySelector(".ConversationList");

	ConversationListElement.innerHTML = "";

	for (const Conversation of ConversationList) {

		let CroppedMesage = Conversation.LastMessage;
		if (CroppedMesage.length > 40) {
			CroppedMesage = CroppedMesage.substring(0, 37) + "...";
		}

		const HTML = `
		<div class="ConversationItem ${Conversation.IsActive ? "ActiveConversation" : ""}">
			<div class="Username">${Conversation.ReceivingUsername}</div>
			<div class="Timestamp">${Conversation.Timestamp}</div>
			<div class="LastMessage">${CroppedMesage}</div>
			<div class="Updates ${Conversation.HasUpdates ? "HasUpdates" : ""}">${Conversation.UpdateCount}</div>
		</div>
		`;
		ConversationListElement.insertAdjacentHTML("beforeend", HTML);	
	}
	

	
}