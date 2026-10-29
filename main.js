const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const spacialchars = ["%", "*", "/", "-", "+", "="];
let output ="";
// Calculate based on buttunclicked
const calculate = (btnvalue) => {
    display.focus();
    if (btnvalue === "=" && output !== "") {
        // Replace '%' with '/100' before evaluating
    output = eval(output.replace("%", "/100"));
    } else if (btnvalue === "AC") {
        output ="";
    } else if(btnvalue === "DEL") {
        // Remove last character DEL
        output = output.toString().slice(0, -1);
    } else {
        // Skip if empty output and special char
        if (output === "" && spacialchars.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
};
// Add click listeners to buttons
buttons.forEach((button) => {
    // Call calculate with button's data value
    button.addEventListener("click", (e) =>
    calculate(e.target.dataset.value));
});
