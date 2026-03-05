document.getElementById('phoneForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneInput = document.getElementById('phone');
    const message = document.getElementById('message');
    const regex = /^(?:\+92|0)\d{10}$/;



    if (regex.test(phoneInput.value.trim())) {
        phoneInput.classList.remove('invalid');
        phoneInput.classList.add('valid');
        message.textContent = 'Valid Pakistani phone number';
        message.className = 'success';
    } else {
        phoneInput.classList.remove('valid');
        phoneInput.classList.add('invalid');
        message.textContent = 'Invalid Phone Number';
        message.className = 'error';
    }
});
