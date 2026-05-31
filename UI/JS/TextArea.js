const Textarea = document.querySelector(".InputArea textarea");
const CharacterCount = document.getElementById("CharacterCount");

const PageHeight = document.documentElement.scrollHeight;

Textarea.addEventListener("input", () => {
	Textarea.style.height = "auto";
	Textarea.style.height = Math.min(Textarea.scrollHeight, PageHeight * 0.4) + "px";

	CharacterCount.innerText = Textarea.value.length + "/1000";
	CharacterCount.style.color = Textarea.value.length > 500 ? "var(--Yellow-4)" : "var(--Green-3)";
	CharacterCount.style.color = Textarea.value.length > 800 ? "var(--Red-5)" : CharacterCount.style.color;
});