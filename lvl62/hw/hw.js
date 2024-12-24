function validateInput(inputText) {
    const regex = /\d/;
    if (regex.test(inputText)) {
        let errorIndices = [];
        for (let i = 0; i < inputText.length; i++) {
            if (/\d/.test(inputText[i])) {
                errorIndices.push(i);
            }
        }
        return `ერორი. რიცხვები იპოვეს ინდექსებზე: ${errorIndices.join(', ')}`;
    } else {
        return "წარმატებული ოპერაცია";
    }
}

console.log(validateInput("Hello 2024 World"));
console.log(validateInput("Hello World"));
