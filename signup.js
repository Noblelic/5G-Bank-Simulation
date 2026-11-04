'use strict'

// SIGNING UP   


const signupbutton = document.getElementById('signupbtn')


const signupForm = document.getElementById('signupForm')

signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop page reload

   const inputfullname = document.getElementById('signupfullname').value;
    const inputemail = document.getElementById('email').valu;
    const inputphone = document.getElementById('phonenumber').valu;
    const inputcountry = document.getElementById('country').valu;
    const inputpassword = document.getElementById('password').valu;
    const inputpassword2 = document.getElementById('confirmpassword').valu;

    // Save the user data to localStorage
    localStorage.setItem('registeredName', inputfullname);
    localStorage.setItem('registeredEmail', inputemail);
    localStorage.setItem('registeredPhone', inputphone);
    localStorage.setItem('registeredCountry', inputcountry);
    localStorage.setItem('registeredPassword', inputpassword2);

    alert('Registration successful! Redirecting to login...');
    
    // Redirect to the login page
    window.location.href = 'login.html';
});








// const users = []


// // Register logic

// const createAcc = function(Name, Email, Phone, Country, Password, ConfirmPassword){

//     let user = {
//         fullname : Name,
//         Email : Email,
//         Phone : Phone,
//         Country : Country,
//         Password : Password,
//         ConfirmPassword: ConfirmPassword,
//     }
//     users.push(user)
//     return user

// }

// signupbutton.addEventListener('click', function(e){
//     e.preventDefault()

//     if(inputpassword.value === inputpassword2.value &&  inputfullname.value !== '' && inputemail.value !== '' && inputphone.value !== '' && inputcountry.value !== '') {
//         createAcc(inputfullname.value, inputemail.value, inputphone.value, inputcountry.value, inputpassword.value, inputpassword2.value)
//        window.location.href='login.html'
//     }else{
//         console.log('wrong details')
//     }
// })


// localStorage.setItem('users', JSON.stringify(users))