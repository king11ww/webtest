document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    
    if (!form) {
        console.error("Form not found! Make sure the form has id='form'");
        return;
    }
    
    const txtUserName = document.getElementById("txtUserName");
    const txtPassword = document.getElementById("txtPassword");
    const errorMessages = document.getElementById("error");

    form.addEventListener("submit", (e) => {
        let messages = [];

//        if (txtPassword.value != Password.value) {
//            messages.push("Mật khẩu không khớp.");
//        }

        if (messages.length > 0) {
            e.preventDefault();
            errorMessages.innerHTML = messages.join("<br>");
        }
    });
});