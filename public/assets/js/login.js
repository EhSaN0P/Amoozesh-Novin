
const form = document.getElementById("loginForm");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");


const iranPhoneRegex = /^(0)?9\d{9}$/;

phoneInput.addEventListener("input", function (e) {
    // فقط عدد مجاز
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");

    // اگر بیشتر از 11 رقم شد، فقط 11 رقم اول نگه دار
    if (phoneInput.value.length > 11) {
        phoneInput.value = phoneInput.value.slice(0, 11);
    }

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

