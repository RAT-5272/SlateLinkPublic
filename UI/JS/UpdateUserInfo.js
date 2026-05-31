function UpdateUserInfo(UserInfo) {
	document.getElementById("ClientUsername").textContent = UserInfo["Username"]
	document.getElementById("ClientToken").innerHTML= UserInfo["AuthToken"]
}