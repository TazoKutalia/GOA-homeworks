function multiplyNumbers() {
    while (true) {
        const input1 = prompt("Enter the first number (or type 'exit' to quit):");
        if (input1.toLowerCase() === "exit") {
            alert("Program terminated.");
            break;
        }

        const input2 = prompt("Enter the second number (or type 'exit' to quit):");
        if (input2.toLowerCase() === "exit") {
            alert("Program terminated.");
            break;
        }

        const number1 = parseFloat(input1);
        const number2 = parseFloat(input2);

        if (isNaN(number1) || isNaN(number2)) {
            alert("Please enter valid numbers only.");
        } else {
            const result = number1 * number2;
            alert(`The product is: ${result}`);
        }
    }
}
