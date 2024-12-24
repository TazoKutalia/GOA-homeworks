let counter = 0;
const counterDisplay = document.getElementById("counter-value");
const incrementInput = document.getElementById("increment");
const decrementInput = document.getElementById("decrement");

const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const resetBtn = document.getElementById("reset-btn");

increaseBtn.addEventListener("click", () => {
    const incrementValue = parseInt(incrementInput.value) || 0;
    counter += incrementValue;
    counterDisplay.textContent = counter;
});

decreaseBtn.addEventListener("click", () => {
    const decrementValue = parseInt(decrementInput.value) || 0;
    counter -= decrementValue;
    counterDisplay.textContent = counter;
});

resetBtn.addEventListener("click", () => {
    counter = 0;
    counterDisplay.textContent = counter;
});
