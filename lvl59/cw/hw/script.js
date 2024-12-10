document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    if (!name || !surname || !email || !password || !terms) {
        alert("Please fill in all the fields");
        return;
    }

    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Agrees to Terms and Conditions:", terms);
});
