const input = document.querySelector(".input_field");
const eyeIcon = document.getElementById("eye-icon");
const passwordStrengthBar = document.getElementById("password-strength");

// Toggle visibility of password
eyeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    eyeIcon.src = type === 'password' ? 'eye.png' : 'visibility-off.png';
});

// Check password strength
input.addEventListener("keyup", function() {
    const password = input.value;
    checkStrength(password);
});

function checkStrength(password) {
    let strength = 0;

    // Lowercase and Uppercase check
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        document.querySelector('.low-upper-case').classList.add('valid');
        document.querySelector('.low-upper-case').classList.remove('invalid');
        document.querySelector('.low-upper-case img').src = 'check-mark.png';
        strength += 1;
    } else {
        document.querySelector('.low-upper-case').classList.add('invalid');
        document.querySelector('.low-upper-case').classList.remove('valid');
        document.querySelector('.low-upper-case img').src = 'remove.png';
    }

    // Number check
    if (password.match(/([0-9])/)) {
        document.querySelector('.number').classList.add('valid');
        document.querySelector('.number').classList.remove('invalid');
        document.querySelector('.number img').src = 'check-mark.png';
        strength += 1;
    } else {
        document.querySelector('.number').classList.add('invalid');
        document.querySelector('.number').classList.remove('valid');
        document.querySelector('.number img').src = 'remove.png';
    }

    // Special character check
    if (password.match(/([!@#$%^&*])/)) {
        document.querySelector('.special-char').classList.add('valid');
        document.querySelector('.special-char').classList.remove('invalid');
        document.querySelector('.special-char img').src = 'check-mark.png';
        strength += 1;
    } else {
        document.querySelector('.special-char').classList.add('invalid');
        document.querySelector('.special-char').classList.remove('valid');
        document.querySelector('.special-char img').src = 'remove.png';
    }

    // Minimum character check
    if (password.length >= 8) {
        document.querySelector('.min-char').classList.add('valid');
        document.querySelector('.min-char').classList.remove('invalid');
        document.querySelector('.min-char img').src = 'check-mark.png';
        strength += 1;
    } else {
        document.querySelector('.min-char').classList.add('invalid');
        document.querySelector('.min-char').classList.remove('valid');
        document.querySelector('.min-char img').src = 'remove.png';
    }

    // Update strength bar
    updateStrengthBar(strength);
}

function updateStrengthBar(strength) {
    if (strength < 2) {
        passwordStrengthBar.style.width = '20%';
        passwordStrengthBar.style.backgroundColor = 'red';
    } else if (strength == 2) {
        passwordStrengthBar.style.width = '40%';
        passwordStrengthBar.style.backgroundColor = 'orange';
    } else if (strength == 3) {
        passwordStrengthBar.style.width = '60%';
        passwordStrengthBar.style.backgroundColor = 'yellow';
    } else if (strength == 4) {
        passwordStrengthBar.style.width = '100%';
        passwordStrengthBar.style.backgroundColor = 'green';
    }
}
