const form = document.getElementById("verifyForm");
const codeInput = document.getElementById("codeInput");
const errorMsg = document.getElementById("errorMsg");
const timerText = document.getElementById("timerText");

const codeRegex = /^[0-9]{4}$/;
let countdown = 30;
let timerInterval = null;


function startTimer() {
    clearInterval(timerInterval);
    countdown = 30;
    timerText.style.color = "";
    timerText.style.cursor = "";
    timerText.textContent = `${countdown} ثانیه مانده تا دریافت مجدد پیامک`;

    timerInterval = setInterval(() => {
        countdown--;
        timerText.textContent = `${countdown < 10 ? "0" + countdown : countdown} ثانیه مانده تا دریافت مجدد پیامک`;

        if (countdown <= 0) {
            clearInterval(timerInterval);
            timerText.textContent = "ارسال مجدد کد";
            timerText.style.color = "blue";
            timerText.style.cursor = "pointer";
        }
    }, 1000);
}
function generateCode(){
    return Math.floor(1000 + Math.random() * 9000)
}


function resendCode() {
    generateCode();
    startTimer();
}

timerText.addEventListener("click", function () {
    if (countdown <= 0) {
        resendCode();
    }
});

startTimer();
let validCode = generateCode()
console.log(validCode)



form.addEventListener("submit", function (e) {
    e.preventDefault();
    const code = codeInput.value.trim();
    if (!codeRegex.test(code) || codeInput.value != validCode) {
        errorMsg.classList.remove("d-none");
        codeInput.classList.add("is-invalid")
    }else if(codeRegex.test(code) && codeInput.value == validCode) {
        window.location.href = "landing_page.html"
    }
});

codeInput.addEventListener("input", function () {
    codeInput.value = codeInput.value.replace(/[^0-9]/g, "");
    errorMsg.classList.add("d-none");
    codeInput.classList.remove("is-invalid");
});
