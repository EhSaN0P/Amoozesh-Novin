const form = document.getElementById("loginForm");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");


const iranPhoneRegex = /^(0)?9\d{9}$/;

phoneInput.addEventListener("input", function () {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
    phoneError.classList.add("d-none");
    phoneInput.classList.remove("is-invalid");
});

form.addEventListener("submit", function (e) {
        e.preventDefault();
    const phone = phoneInput.value.trim();

    if (!iranPhoneRegex.test(phone)) {
        phoneError.classList.remove("d-none");
        phoneInput.classList.add("is-invalid");
    } else {
        window.location.href = "verification.html"
    }
});