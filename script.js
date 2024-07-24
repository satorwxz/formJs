const regis= document.getElementById('registrationForm')
regis.addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username.length < 3 || firstName.length < 3 || lastName.length < 3) {
        alert('User Name, First Name, and Last Name must be at least 3 characters long.');
        return;
    }

    if (password.length < 3 || password.length > 8) {
        alert('Password must be between 3 and 8 characters long.');
        return;
    }

    if (password !== confirmPassword){
        alert('Passwords do not match.');
        return;
    }

    alert(`Registration successful!\nUser Name: ${username}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`);
    event.preventDefault();
});
