
const form = document.getElementById('form');
const formControl = document.getElementById('form-control');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit' , (e)=> {
    e.preventDefault();

     checkInputs();
});


function checkInputs() {
    // get the value from the inputs

   const usernameValue = username.value.trim();
   console.log(usernameValue);
   const  emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const   password2Value = password2.value.trim();

   if(usernameValue ===  ''){
       //show error
       //add error class
       setErrorFor(username, 'username cannot be blank');
   } else {
       // add success class
       setSuccessFor(username);
   }

   if (emailValue === '' ) {
    setErrorFor(email, 'email cannot be blank');
   } else if (!isEmail(emailValue)) {
       setErrorFor(email, 'Email is not valid');
   } else {
       setSuccessFor(email);
    }

   if(passwordValue === '') {
       setErrorFor(password, 'Password cannot be blank');
   } else {
       setSuccessFor(password);
   }

   if(password2Value === '') {
    setErrorFor(password2, 'Password2 cannot be blank');
} else if(password2Value !== passwordValue) {
    setErrorFor(password2, 'password does not match');
} else {
    setSuccessFor(password2);
  }

  // show a success message for all the form input,a challenge to implement.


};



function setErrorFor(input, message) {

       const formControl = input.parentElement; //.form-control
       const small = formControl.querySelector('small');

       // add error message inside small
            small.innerText = message;

       // add error class
        formControl.className = 'form-control error';
   }

   function setSuccessFor(input){
       const formControl = input.parentElement;
       formControl.className = 'form-control success';
   }

   function isEmail(email) {
       return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
   }

