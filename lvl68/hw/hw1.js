function checkTextInput() {
    const enteredTexts = new Set();
    while (true) {
        const text = prompt("შეიყვანეთ ტექსტი:");
        if (enteredTexts.has(text)) {
            alert("ეს ტექსტი უკვე შეყვანილი გაქვთ! სცადეთ სხვა.");
        } else {
            enteredTexts.add(text);
            alert("ტექსტი დამატებულია.");
        }
    }
}
