var btn = document.createElement("button");

btn.innerHTML = "Click Me";
btn.id = "myButton";
btn.name = "myButton";
btn.value = "Click Me";
btn.onclick = function () {
  alert("You clicked me!");
};