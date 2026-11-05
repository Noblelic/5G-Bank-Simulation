'use strict'

// SIGNING UP   

const users = []

   const nameinput = document.getElementById('signupfullname');
    const emailinput = document.getElementById('email');
    const phoneinput = document.getElementById('phonenumber');
    const countryinput = document.getElementById('country');
    const passwordinput = document.getElementById('password');
    const passwordinput2 = document.getElementById('confirmpassword');
    const signupbutton = document.getElementById('signupbtn')


// Register logic

const createAcc = function(Name, Email, Phone, Country, Password, ConfirmPassword){

    let user = {
        fullname : Name,
        Email : Email,
        Phone : Phone,
        Country : Country,
        Password : Password,
        ConfirmPassword: ConfirmPassword,
    }
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
    return user
}

signupbutton.addEventListener('click', function(e){
    e.preventDefault()

    if(passwordinput.value === passwordinput2.value &&  nameinput.value !== '' && emailinput.value !== '' && phoneinput.value !== '' && countryinput.value !== '') {
        createAcc(nameinput.value, emailinput.value, phoneinput.value, countryinput.value, passwordinput.value, passwordinput2.value)
       window.location.href='login.html'
    }else{
        console.log('wrong details')
    }
})





































// const signupForm = document.getElementById('signupForm')

// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault(); // Stop page reload



//     // Save the user data to localStorage
//     localStorage.setItem('registeredName', inputfullname);
//     localStorage.setItem('registeredEmail', inputemail);
//     localStorage.setItem('registeredPhone', inputphone);
//     localStorage.setItem('registeredCountry', inputcountry);
//     localStorage.setItem('registeredPassword', inputpassword2);

//     alert('Registration successful! Redirecting to login...');
    
//     // Redirect to the login page
//     window.location.href = 'login.html';
// });








