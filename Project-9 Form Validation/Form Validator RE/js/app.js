//form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('pin').addEventListener('blur', validatePin);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/; 

  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid')
  }
}

function validatePin() {
  const pin = document.getElementById('pin');
  const re = /^[0-9]{6}$/; //indian
  //const re = /^[0-9]{5}(-[0-9]{4})?$/; //american

  if(!re.test(pin.value)) {
    pin.classList.add('is-invalid');
  } else {
    pin.classList.remove('is-invalid')
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-z]{2,5})$/; 

  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid')
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; 

  if(!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid')
  }
}