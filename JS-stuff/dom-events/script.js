const input = document.getElementById("userinput");
const enter = document.getElementById("enter");
const ul = document.querySelector("ul");

function showResult() {
  if (input.value.length > 0) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    // li.textContent=input.value; also works
    ul.appendChild(li);
    input.value = "";
  }
}
function keyResult(e) {
  if (e.keyCode == 13) showResult();
}
function clickResult() {
  showResult();
}
enter.addEventListener("click", clickResult);
//not enter
input.addEventListener("keypress", keyResult);
