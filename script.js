// Initialisation
let input = document.getElementsByClassName("equation"); // Input
number = document.querySelectorAll(".number"); // Number buttons
operator = document.querySelectorAll(".operators button"); // Operator buttons
result = document.getElementById("result"); // Equal button
clear = document.getElementById("clear"); // Clear button

// Functions for number buttons ---
function disE(e) {
  let item = e.target.value;
  equation.value += item;
}
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", disE);
}

// Clear Button ---
function clearButton() {
  equation.value = "";
}
clear.addEventListener("click", clearButton);

// Result ---
function answ() {
  result.append(equation);
}
result.addEventListener("click", answ);