
const buttons = document.querySelectorAll(".btn");
const input = document.querySelector("input");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "clear") {
      currentInput = ""; // Clear the input
    } else if (value === "Enter") {
      try {
        currentInput = eval(currentInput); // Calculate the result
      } catch (error) {
        currentInput = "Error"; // Handle invalid expressions
      }
    } else {
      currentInput += value; // Append the clicked button's value
    }

    input.value = currentInput; // Update the display
  });
});