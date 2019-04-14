// (c)) Copyright 2018, Anas Abu Farraj.
// Input RegExp Validation
// 30 Aug 2018

const inputs = document.querySelectorAll('input');
const patterns = {
  username: /^[a-z\d]{8,}$/,
  phone: /^\d{11}$/,
  password: /^[\w@-]{8,20}$/,
  email: /^([\w\d.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,6})?$/i,
};

// validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'form-control is-valid';
  } else field.className = 'form-control is-invalid';
}

// validate on each keyup event
function onKeyup(input) {
  input.addEventListener('keyup', e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
}

// call validation function for each input
inputs.forEach(onKeyup);
