const passwordInput = document.querySelector(".password-box input");
const copyIcon = document.querySelector(".password-box .copy-icon");
const rangeInput = document.querySelector(".range-box input");
const sliderNumber = document.querySelector(".slider-number");
const generateButton = document.querySelector(".generate-button");
const alertContainer = document.querySelector(".alert-container");


// List of characters used for generating the password
const chars = "0123456789acbdegjijklmnopqrstuvwxyz!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to generate a random password
const generatePassword = () => {
    let newPassword = "";
    for (let i = 0; i < rangeInput.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        newPassword += chars[randomIndex];
    }
    passwordInput.value = newPassword;
};

// Event listener for range input change
rangeInput.addEventListener("input", () => {
    sliderNumber.innerHTML = rangeInput.value;
    generatePassword();
});

// Event listener for copy icon click
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    if (sliderNumber.innerHTML === rangeInput.value) {
        alertContainer.innerHTML = "Password Copied!";
        alertContainer.style.visibility = "visible";
        setTimeout(() => {
            alertContainer.style.visibility = "hidden";
        }, 2000);
    }
});


// Generate a password initially
generatePassword();

// Event listener for generate button click
generateButton.addEventListener("click", generatePassword);