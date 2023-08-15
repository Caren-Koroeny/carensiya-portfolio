// defining a dom shortcut function.
function dcl(t = 'div') {
  if (!t) {
    t = 'div';
  }
  return document.createElement(t);
}

// This block for Type writer effect on headline section
const heading = ' I am Caren Siya , <br/> Full Stack Web Developer!';
const hArr = heading.split(' ');
let typeCount = 1;
function typeWriter() {
  if (typeCount < hArr.length) {
    document.querySelector(
      '.type-animation',
    ).innerHTML += ` ${hArr[typeCount]}`;
    typeCount += 1;
    setTimeout(typeWriter, 200);
  }
}

typeWriter();

// this peace of code is responsible for scroll spy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav_item_action');
window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 200;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (top >= offset && top < height + offset) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelectorAll(`a[href*=${id}]`)
          .forEach((item) => item.classList.add('active'));
      });
    }
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navigation Menu
const mobileMenu = document.querySelector('.header_menu');
const navItems = document.querySelector('.mobile_nav_items');
const selectNavItems = document.querySelectorAll('#m_nav');
const crossIcon = document.querySelector('.toggle-cross');
let setMobileNav = false;

function toggleNav() {
  if (setMobileNav) {
    navItems.classList.remove('df');
    setMobileNav = false;
  } else {
    navItems.classList.add('df');
    setMobileNav = true;
  }
}

mobileMenu.addEventListener('click', toggleNav);
crossIcon.addEventListener('click', toggleNav);
selectNavItems.forEach((item) => {
  item.addEventListener('click', toggleNav);
});

// Project Section
// project data
const projectData = [
  {
    id: 'project10',
    title: 'Ridease',
    frame: ['Full-stack', 2023],
    primaryText:
      'RideEase is a car booking website that allows users to easily book a ride and travel to their desired destinations. User can reserve a car from the available cars by provideing the date and city. RideEase provides a seamless and reliable car booking experience.',
    tags: ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Ruby on Rails', 'PostgreSQL'],
    imageUrl:
      'https://user-images.githubusercontent.com/79504482/256763599-86a413a9-db31-4679-b1e7-fa80099f5164.png',
    projectDetails:
      'Resort Booking is an innovative web application designed to empower travelers in finding and booking their dream resorts effortlessly. With an extensive collection of resorts and comprehensive details, users can explore diverse destinations, hand-picking their ideal getaway. The platform provides valuable insights into resort amenities, room types, and real-time availability, ensuring informed decision-making. Seamlessly managing bookings, users experience a hassle-free reservation process, making their vacation planning a breeze. With a user-friendly interface and an array of options, Resort Booking promises to redefine the way travelers embark on their next memorable journey.',
    liveLink: 'https://resort-booking-front-end-c8l1.onrender.com/',
    sourceLink: 'https://rideease.onrender.com/',
  },
  {
    id: 'project9',
    title: 'Rails-Recipe-food',
    frame: ['E-commerce', 'Frontend', 2023],
    primaryText:
      'The rails-recipe-app is a classic example of a recipe website, that keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    tags: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    imageUrl:
      'https://user-images.githubusercontent.com/55842414/249535168-e0dc9f4f-3e39-4b40-9cb8-39f189ed40c9.png',
    projectDetails:
      'The rails-recipe-app is a classic example of a recipe website, that keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    liveLink: 'https://rails-recipe-apj7.onrender.com/users/sign_in',
    sourceLink: 'https://github.com/AmineDerbal/rails-recipe',
  },
  {
    id: 'project8',
    title: 'Budget App',
    frame: ['Full-Stack', 2023],
    primaryText:
      'This is a budget app where you can setup your different budgets and you can create different categories and also delete your own categories and also create new transactions and also delete your own transactions.',
    tags: ['HTML', 'CSS', 'Javascript', 'PostgreSQL'],
    imageUrl:
      'https://user-images.githubusercontent.com/55842414/253625244-eccd34dc-e017-4b0e-b89a-f75419b3156f.png',
    projectDetails:
      'This is a budget app where you can setup your different budgets and you can create different categories and also delete your own categories and also create new transactions and also delete your own transactions.',
    
      liveLink: ' https://siya.onrender.com/products',
      sourceLink: 'https://github.com/Caren-Koroeny/BudgetApp',
   
  },
  {
    id: 'project7',
    title: 'BookStore',
    frame: ['Microverse', 'Frontend', 2023],
    primaryText:
      'Book Store is a Microverce React MVP project. Using this project user can read a book. User can see a book list. User can update a book. And also User can delete book from the book list.',
    tags: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    imageUrl:
      'https://raw.githubusercontent.com/Caren-Koroeny/BookStore/dev/src/images/bookstore.png',
    projectDetails:
      'Book Store is a Microverse React MVP project that enables users to read books and manage their reading lists. With this project, users can view a list of available books, update book details, and remove books from their reading list as needed, providing a simple and convenient platform for managing their reading interests',
    liveLink: 'https://caren-bookstore.onrender.com/',
    sourceLink: 'https://github.com/Caren-Koroeny/BookStore',
  },
  {
    id: 'project6',
    title: 'Healthy Food Recipe',
    frame: ['Microverse', 'Frontend', 2023],
    primaryText:
      'In this application, a user can search for recipes by category and get a list of all the meals. The user can also click on a particular meal to see the details of the ingredients and instructions on how to prepare it.',
    tags: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    imageUrl:
      'https://user-images.githubusercontent.com/55842414/227455473-77779ecf-60fb-4c28-a500-e69d64e1ac68.png',
    projectDetails:
      'In this project, I built a dynamic catalogue of food recipes app using react/redux, Axios, promises,amongst other tools.Recipes List page with a list of recipes that could be filtered by some parameters; in this project, its a list of recipes that can be filtered by ingredients (shrimp, broccoli, etc.)Recipe Item page for the recipe details; in this example, the recipe detail page (Preview Recipe).In this application, a user can search for recipes by category and get a list of all the meals. The user can also click on a particular meal to see the details of the ingredients and instructions on how to prepare it.',
    liveLink: 'https://deploy-preview-1--heroic-dasik-5790ea.netlify.app/',
    sourceLink: 'https://github.com/Caren-Koroeny/healthy-food-recipe',
  },
  {
    id: 'project5',
    title: 'LeaderBoard',
    frame: ['Microverse', 'Frontend', 2023],
    primaryText:
      'My Leader Board Project will not function when you uyou submit a name and a score to the form, the leaderboard list will not automatically update itself. It requires you to hit the refresh button to fetch all the data from the API. Note that my leaderboard does not sort the scores it just displays them as they are.API will be impelemented soon, this is a set up of how it will generally look like.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl:
      'https://raw.githubusercontent.com/Caren-Koroeny/leader-board/development/src/image/image1.png',
    projectDetails:
      'My Leader Board Project will not function when you uyou submit a name and a score to the form, the leaderboard list will not automatically update itself. It requires you to hit the refresh button to fetch all the data from the API. Note that my leaderboard does not sort the scores it just displays them as they are.API will be impelemented soon, this is a set up of how it will generally look like.',
    liveLink: 'https://github.com/Caren-Koroeny/leader-board',
    sourceLink: 'https://github.com/Caren-Koroeny/leader-board',
  },
]; // End of portfolio data

// Fetch single project from projectData
function fetchOnePoject(id) {
  const projects = projectData;

  let project;
  for (let i = 0; i < projectData.length; i += 1) {
    if (projects[i].id === id) {
      project = projects[i];
    }
  }

  if (project) {
    const article = dcl('article');
    article.classList.add('popup_article');
    article.setAttribute('id', project.id);

    const articleModal = dcl();
    articleModal.classList.add('article-modal');
    // Article title
    const workTitle = dcl('h2');
    workTitle.classList.add('work_title');
    workTitle.innerText = project.title;

    // cross-icon
    const crossIcon = dcl('span');
    crossIcon.setAttribute('id', 'article-close');
    crossIcon.innerHTML = '<img src="./images/cross-icon-white.png" alt="X"/>';

    // work_info
    const workInfo = dcl('ul');
    workInfo.classList.add('work_info');

    // work_info_item
    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('w_info_item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });

    // image
    const articleImage = dcl();
    articleImage.classList.add('article-image');
    articleImage.innerHTML = `<img class='article-img' src='${project.imageUrl}' alt='${project.title}'/>`;

    // project block
    const projectBlock = dcl();
    projectBlock.classList.add('article-block');

    // left block
    const leftBlock = dcl();
    leftBlock.classList.add('left-block');
    // article_details_content
    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work_details_content');
    workDetailsContent.innerText = project.projectDetails;
    leftBlock.append(workDetailsContent);

    // right block
    const rightBlock = dcl();
    rightBlock.classList.add('right-block');

    // work_cat
    const workCat = dcl('ul');
    workCat.classList.add('work_cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });

    // actions
    const actions = dcl();
    actions.classList.add('actions');

    // live link
    if (project.liveLink) {
      const liveLink = dcl('a');
      liveLink.classList.add('article-btn');
      liveLink.setAttribute('href', project.liveLink);
      liveLink.setAttribute('target', '_blank');
      liveLink.innerHTML = 'See Live <span class="btn-icon"><img src="./images/btn-live.png" alt= "Live"/></span>';
      actions.appendChild(liveLink);
    }

    // source link
    const sourceLink = dcl('a');
    sourceLink.classList.add('article-btn');
    sourceLink.setAttribute('href', project.sourceLink);
    sourceLink.setAttribute('target', '_blank');
    sourceLink.innerHTML = 'See Source <span class="btn-icon"><img src="./images/btn-github.png" alt= "Live"/></span>';

    // appending link
    actions.appendChild(sourceLink);

    // appending rightBlock
    rightBlock.append(workCat, actions);

    // appending projectBlock
    projectBlock.append(leftBlock, rightBlock);

    // appending article-modal
    articleModal.append(
      crossIcon,
      workTitle,
      workInfo,
      articleImage,
      projectBlock,
    );

    // appending article-modal to article
    article.append(articleModal);
    // end of if condition
    document.querySelector('main').append(article);

    // add event
    const closeModal = document.getElementById('article-close');
    closeModal.addEventListener('click', () => {
      document.querySelector('main').removeChild(article);
    });
  }
}

// this fetchAllProject function will add data in portfolio section dinamically
function fetchAllProject() {
  // select the portfolio
  const portfolio = document.getElementById('projects');
  projectData.forEach((project) => {
    // Dom element for card
    const card = dcl();
    card.classList.add('work_card');

    const workPreview = dcl();
    workPreview.classList.add('work_preview');
    workPreview.innerHTML = `<img class='project-img' src='${project.imageUrl}' alt='${project.title}'/>`;
    card.appendChild(workPreview);

    // work_details
    const workDetails = dcl();
    workDetails.classList.add('work_details');

    // work title
    const workTitle = dcl('h2');
    workTitle.classList.add('work_title');
    workTitle.innerText = project.title;
    workDetails.appendChild(workTitle);

    // work_info
    const workInfo = dcl('ul');
    workInfo.classList.add('work_info');

    // work_info_item
    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('w_info_item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });
    workDetails.appendChild(workInfo);

    // work_details_content
    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work_details_content');
    workDetailsContent.innerText = project.primaryText;
    workDetails.appendChild(workDetailsContent);

    // work_cat
    const workCat = dcl('ul');
    workCat.classList.add('work_cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });
    workDetails.appendChild(workCat);
    // action button
    const atnBrn = dcl('button');
    atnBrn.classList.add('atn_btn');
    atnBrn.innerText = 'See More';
    atnBrn.setAttribute('id', project.id);
    atnBrn.addEventListener('click', () => {
      fetchOnePoject(project.id);
    });
    workDetails.appendChild(atnBrn);

    card.appendChild(workDetails);
    portfolio.appendChild(card);
  });
}

// selecting input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Store formData in localStorage
function loadLocalStorage() {
  const formData = JSON.parse(window.localStorage.getItem('formData'));
  if (formData) {
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

// OnChange function will store form data in localStorage
function onChange(e) {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData) {
    formData = {};
  }
  // saving form data on localStorage
  const m = e.target.name;
  formData[m] = e.target.value;
  formData = JSON.stringify(formData);
  window.localStorage.setItem('formData', formData);
}

// Fire event on form input
nameInput.addEventListener('change', onChange);
emailInput.addEventListener('change', onChange);
messageInput.addEventListener('change', onChange);

// Load Data in dom on the fly
window.onload = () => {
  fetchAllProject();
  loadLocalStorage();
};

// Form Validation
function onSubmit(e) {
  const inputEmail = document.getElementById('email');
  const formInfo = document.getElementById('form-info');
  const email = inputEmail.value;

  // Check if email value is lowercase or not
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    inputEmail.classList.add('invalid');
    formInfo.classList.add('error');
    formInfo.innerText = 'Error form is not sent! The Email should be in lower case!!';
  } else {
    inputEmail.classList.remove('invalid');
    formInfo.classList.remove('error');
  }
}
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', onSubmit);

// Remove Error onchange from the form.
const inputEmail = document.getElementById('email');
const formInfo = document.getElementById('form-info');
inputEmail.addEventListener('change', () => {
  inputEmail.classList.remove('invalid');
  formInfo.classList.remove('error');
  formInfo.innerText = '';
});