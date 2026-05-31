function EscapeAndFormat(Text) {
	return Text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
}

function UpdateMessageHistory(ConversationData, MessageHistory) {
	const MessageArea = document.querySelector(".MessageArea");

	const IsAtBottom = MessageArea.scrollTop + MessageArea.clientHeight >= MessageArea.scrollHeight - 20;

	document.getElementById("LastMessageTime").innerText = "Last Response: " + ConversationData.LastResponseTimestamp;
	document.getElementById("ConversationTitle").innerText = ConversationData.ReceivingUsername;

	document.getElementById("MessageInput").placeholder = "Send something to " + ConversationData.ReceivingUsername;

	if (ConversationData.LoadingNewConversation) {
		MessageArea.innerHTML = "";

		let NewHTML = "";
		for (const Message of MessageHistory) {

			const IsMention = Message.Message.includes(`@${ConversationData.Username}`);

			const IsUser = Message.Sender == ConversationData.Username;

			let MessageContent = EscapeAndFormat(Message.Message)
			MessageContent = MessageContent.replaceAll(`@${ConversationData.Username}`, `<span class="UserMentionString">@${ConversationData.Username}</span>`)
			MessageContent = MessageContent.replaceAll(`@${ConversationData.ReceivingUsername}`, `<span class="UserMentionString">@${ConversationData.ReceivingUsername}</span>`)

			NewHTML += `
			<div class="Message ${IsMention ? "Mention" : ""}">
				<div class="MessageHeader ${IsUser ? "User" : "Other"}">
						<div class="MessageSender">${Message.Sender}</div>
						<div class="MessageTimestamp">${Message.Timestamp}</div>
				</div>
				<div class="MessageContent">${MessageContent}</div>
			</div>
			`;
		}
		MessageArea.innerHTML = NewHTML;
	} else {

		const NewMessages = MessageHistory; // If not loading new conversation, this is just the new message
		for (const NewMessage of NewMessages) {

			const IsMention = NewMessage.Message.includes(`@${ConversationData.Username}`);

			const IsUser = Message.Sender == ConversationData.Username;

			let MessageContent = EscapeAndFormat(NewMessage.Message)
			MessageContent = MessageContent.replaceAll(`@${ConversationData.Username}`, `<span class="UserMentionString">@${ConversationData.Username}</span>`)
			MessageContent = MessageContent.replaceAll(`@${ConversationData.ReceivingUsername}`, `<span class="UserMentionString">@${ConversationData.ReceivingUsername}</span>`)

			MessageArea.insertAdjacentHTML("beforeend", `
			<div class="Message ${IsMention ? "Mention" : ""}">
				<div class="MessageHeader ${IsUser ? "User" : "Other"}">
						<div class="MessageSender">${NewMessage.Sender}</div>
						<div class="MessageTimestamp">${NewMessage.Timestamp}</div>
				</div>
				<div class="MessageContent">${MessageContent}</div>
			</div>
			`); // Add new message to bottom of history
		}
	}

	if (ConversationData.ScrollToBottom || IsAtBottom) {
		MessageArea.scrollTop = MessageArea.scrollHeight;
	}
}