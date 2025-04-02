document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    
    if (!form) {
        console.error("Form not found! Make sure the form has id='form'");
        return;
    }
    
    const txtName = document.getElementById("txtName");
    const txtPhone = document.getElementById("txtphone");
    const txtUserName = document.getElementById("txtUserName");
    const txtPassword = document.getElementById("txtPassword");
    const txtPasswordAgain = document.getElementById("txtPasswordagain");
    const errorMessagesPhone = document.getElementById("errorPhone");
    const errorMessagesPassword = document.getElementById("errorPassword");
    const errorMessagesPasswordagain = document.getElementById("errorPasswordagain");

    form.addEventListener("submit", (e) => {
        let messages = [];

        if (txtPassword.value !== txtPasswordAgain.value) {
            messages.push("Mật khẩu không khớp.");
            e.preventDefault();
            errorMessagesPasswordagain.innerHTML = messages.join("");
        }
        messages = [];
        if (txtPassword.value.length < 6) {
            messages.push("Mật khảu phải nhất 6 ki tự.");
            e.preventDefault();
            errorMessagesPassword.innerHTML = messages.join("");
        }
        messages = [];
        if (txtPhone.value.length > 11 || txtPhone.value.length < 10) {
            messages.push("Số diện thoại không hợp lệ.");
            e.preventDefault();
            errorMessagesPhone.innerHTML = messages.join("");
        }
    });
});
