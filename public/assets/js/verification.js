const correctCode = "1234"
const form = document.getElementById("verifyForm")
const input = document.getElementById("codeInput")
const error = document.getElementById("errorMsg")

// فقط عدد و فقط ۴ رقم
input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "").slice(0, 4);
});

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (input.value === correctCode) {
        window.location.href = "landing_page.html"
    } else {
        error.classList.remove("d-none")
    }
});