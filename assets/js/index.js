const hamburger = document.querySelector('.hamburgur');
const navsub = document.querySelector('.nav-sub');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  navsub.classList.toggle('nav-change');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('change');
    navsub.classList.remove('nav-change');
  }));

const errorMessage = (message) => {
  document.getElementById('error').innerHTML = `<p style="padding:15px;">${message}</p>`;
};
  // contact form validation
const email = document.getElementById('email');
const nameInput = document.getElementById('name');
const text = document.getElementById('text');
document.querySelector('submit-btn2').addEventListener('click', () => {
  // if the email field is valid, we let the form submit
  if (email.validity.typeMismatch) {
    errorMessage('Invalid Email: Enter a valid email address');
  } else if (email.validity.patternMismatch) {
    errorMessage('Please ensure email address is in lowercase');
  } else if (!nameInput.validity.valid) {
    errorMessage('Invalid Name: Name is required');
  } else if (!email.validity.valid) {
    errorMessage('Invalid Email: Email is required');
  } else if (!text.validity.valid) {
    errorMessage('Invalid Message: Message is required');
  } else {
    // submit form
    document.getElementsByClassName('contact-form').submit-btn2();
  }
});