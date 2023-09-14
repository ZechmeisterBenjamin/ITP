function checkEmail() {
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("email-message");

    if (emailInput.value.includes("@")) {
        emailMessage.style.display = "none";
    } else {
        emailMessage.style.display = "block";
    }
}