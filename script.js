var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let list = document.getElementsByTagName("li")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	clickableItem(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneWithItem(event) {
	if (event.target.tagName !== "BUTTON"){
		event.target.classList.toggle("done");
	}
}

function delItem(event) {
	let elem = event.target.parentNode;
	elem.remove();
}

function clickableItem(item) {
	item.addEventListener("click", doneWithItem);
	let delBttn = document.createElement("button");
	delBttn.textContent = "delete";
	delBttn.addEventListener("click", delItem)
	item.appendChild(delBttn);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (let i = 0; i < list.length; i++)
{
	clickableItem(list[i]);
}