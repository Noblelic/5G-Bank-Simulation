'use strict'





loginForm.addEventListener('submit', function(e){
e.preventDefault();})


// const email = document.getElementById('loginemail').value;
// const password = document.getElementById('loginpassword').value;
// const loginbtn = document.getElementById('loginbtn');

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload

    const emailInput = document.getElementById('loginemail').value;
    const passwordInput = document.getElementById('loginpassword').value;

    // Retrieve saved user credentials from localStorage
    const savedEmail = localStorage.getItem('registeredEmail');
    const savedPassword = localStorage.getItem('registeredPassword');

    // Check if credentials match
    if (emailInput === savedEmail && passwordInput === savedPassword) {
        alert('Login successful! Welcome.');
        // Redirect to dashboard or home page
        // window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});