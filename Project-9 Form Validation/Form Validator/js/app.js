const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show onput error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required.`);
    } else {
      showSuccess(input);
    }
  });
}

//check vaild email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not vaild');
  }
}

//check password
// function checkPassword(input) {
//   const password =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//   if(password.test(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, 'password is not vaild');
//     alert('password should between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character');
//   }
// }

//check input lenght
function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
  } else if(input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
  } else {
    showSuccess(input);
  }
}

//check paswords match
function checkPasswordsMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Password do not match')
  }
}

//get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event Listeners
form.addEventListener('submit', function(e) {
  
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  //checkPassword(password);
  checkPasswordsMatch(password, password2);

  e.preventDefault();
});

//const checkPass = document.getElementById('password').addEventListener('keyup', checkPassword);
