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
const text = document.getElementById('subject');
document.querySelector('#submit').addEventListener('click', () => {
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
    document.getElementById('myform').submit();
  }
});

const myDetails = document.getElementById('myform');
const myname = document.getElementById('name');
const email1 = document.getElementById('email');
const message = document.getElementById('subject');
const getLocalStorage = localStorage.getItem('userProvidedInfo');

// Load to each contact form fields if there is pre-saved local storage data.

if (getLocalStorage) {
  const dataSave = JSON.parse(getLocalStorage);
  myname.value = dataSave.name;
  email1.value = dataSave.email;
  message.value = dataSave.subject;
}

document.querySelectorAll('input, textarea').forEach((input) => {
  input.addEventListener('input', (event) => {
    event.preventDefault();
    // Calling input values
    const nameData = document.querySelector('#name').value;
    const emailData = document.querySelector('#email').value;
    const msgData = document.querySelector('#subject').value;

    // Store values in object;
    const infoProvided = {
      name: nameData,
      email: emailData,
      subject: msgData,
    };

    localStorage.setItem('userProvidedInfo', JSON.stringify(infoProvided));
  });
});

// make the form staying to the current load, for visualization or testing purpose
myDetails.addEventListener('submit', (e) => {
  e.preventDefault();
});