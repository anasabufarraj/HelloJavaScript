// (c)) Copyright 2018, Anas Abu Farraj.
// Input RegExp Validation
// 30 Aug 2018

const inputs = document.querySelectorAll('input');
const patterns = {
  phone: /^[0-9]{11}$/,
  email: /^[0-9]{11}$/
};

// validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'form-control is-valid';
  } else field.className = 'form-control is-invalid';
}

// validate on each keyup event
inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
