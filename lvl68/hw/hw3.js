function checkPassword() {
    const correctPassword = "12348765";
    while (true) {
        const password = prompt("შეიყვანეთ პაროლი:");
        if (password === correctPassword) {
            alert("პაროლი სწორია!");
            break;
        } else {
            alert("პაროლი არასწორია, სცადეთ კიდევ.");
        }
    }
}
