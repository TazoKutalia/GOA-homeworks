function roundToZeros() {
    let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));
    const firstDigit = parseInt(number.toString()[0]);
    const length = number.toString().length;
    let roundedNumber = firstDigit * Math.pow(10, length - 1);
    if (roundedNumber < number) {
        roundedNumber += Math.pow(10, length - 1);
    }
    alert(`შედეგი: ${roundedNumber}`);
}
