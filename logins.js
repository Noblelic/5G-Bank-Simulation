'use strict'


const email = document.getElementById('loginemail');
const password = document.getElementById('loginpassword');
const loginbtn = document.getElementById('loginbtn');
const loginForm = document.getElementById('loginForm');




const users = JSON.parse(localStorage.getItem('users')) ?? [];
console.log(users)
//login logic 


loginbtn.addEventListener('click', function(e){
    e.preventDefault()
    const ActiveUser =  users.find(function(user){
        console.log(user.Email, user.Password)

     return email.value === user.Email && password.value === user.Password

    })
    
    if(ActiveUser){
      localStorage.setItem('ActiveUser', JSON.stringify(ActiveUser));
    window.location.href='dashboard.html'

  }else{
    alert('incorrect password or email')
  }

})