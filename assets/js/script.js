const data = {
  title1: 'Tonic',
  badges: ['Canopy', 'images/counter-images.png', 'Back End Dev', 'images/counter-images.png', 2015],
  backgroundImage1: ['images/ModalPopup.svg', 'images/mobile-snapshot.png'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  icons: ['html', 'CSS', 'Bootstrap', 'Github', 'Rubby', 'JavaScript'],
  mobileicons: ['html', 'css', 'javascript'],
  links: ['See live', 'images/seelive.png', 'Github', 'images/github.png'],
};

const badgesContainer = document.querySelector('.card1-badges');
badgesContainer.innerHTML += `
  <li class="badges1">${data.badges[0]}</li>
  <img src="${data.badges[1]}" class="modal-counter">
  <li class="badges1">${data.badges[2]}</li>
  <img src="${data.badges[3]}" class="modal-counter">
  <li class="badges1">${data.badges[4]}</li>
  
`;

const modallinks = document.querySelector('.link-button');

modallinks.innerHTML += `
    <button class="livebutton">
        ${data.links[0]}
        <img src="${data.links[1]}">
    </button>
    <button class="livebutton">
        ${data.links[2]}
        <img src="${data.links[3]}">
    </button>
`;

const header = document.querySelector('.title1tonic');
header.innerHTML += data.title1;

const description1 = document.querySelector('.text-para');
description1.innerHTML
+= `
<p class="modal-description">${data.description}</p>
`;
const modalimage1 = document.querySelector('.image1modal');
modalimage1.innerHTML = `
<img src=${data.backgroundImage1[0]} class="modal-bg1">`;

const mobileimage1 = document.querySelector('.mobileimage');
mobileimage1.innerHTML = `
<img src=${data.backgroundImage1[1]} class="modal-bg2">`;

const modalIcon = document.querySelector('.modalsIcon');
data.icons.forEach((icontem) => {
  modalIcon.innerHTML += `
    <li class="modal-icons">${icontem}</li>`;
});

const mobile = document.querySelector('.mobileIcons');
data.mobileicons.forEach((mobitem) => {
  mobile.innerHTML += `
    <li class="mobile-icons">${mobitem}</li>`;
});

// Modal card one section
const desktopCardData = {
  desktopIimages: [
    '/images/desktop-image1.png', '/images/desktop-image2.png',
    '/images/desktop-image3.png', '/images/desktop-image4.png',
  ],
  counterImg: '/images/counter-images.png',
  mobileImages: ['/images/image-1.png', '/images/image-3.png', '/images/image-4.png'],
  cardTitle: ['Tonic', 'Multi-Post Stories', 'Facebook 360', 'Uber Navigation'],
  badges1: ['Canopy', 'Back&nbspEnd&nbspDev', 2015],
  badges2: ['FACEBOOK', 'Full&nbspStack&nbspDev', 2015],
  badges3: ['FACEBOOK', 'Full&nbspStack&nbspDev', 2015],
  badges4: ['Canopy', 'Lead Developer', 2018],
  languages: ['html', 'css', 'JavaScript', 'Ruby on rails'],
};

const cardOne = document.querySelector('.one');

cardOne.innerHTML += `
    <img src="${desktopCardData.mobileImages[0]}" class="image">
    <img src="${desktopCardData.desktopIimages[0]}" alt="Tonic project" class="desktop-image1">
    <div class="left-card1-block one">
        <h2 class="project-title">${desktopCardData.cardTitle[0]}</h2>
    
        <ul class="project-badges">
            <li class="text-1 ">Canopy</li>
            <img src="${desktopCardData.counterImg}" alt="" class="counter-image">
            <li class="text-2">
            ${desktopCardData.badges1[1]}
            </li>
            <img src="${desktopCardData.counterImg}" alt="" class="counter-image">
            <li class="text-3">${desktopCardData.badges1[2]}</li>
        </ul>

        <p class="project-description">
            A daily selection of privately personalized reads; no accounts or sign-ups required.
        </p>
        <br>
        <ul class="language-categories">
            <li>${desktopCardData.languages[0]}</li>
            <li>${desktopCardData.languages[1]}</li>
            <li>${desktopCardData.languages[2]}</li>
        </ul>
        <button class="submit-btn modal-btn" type="submit">See Project</button>
    </div>
`;
const cardTwo = document.querySelector('.two');
cardTwo.innerHTML += `
<img src="${desktopCardData.desktopIimages[1]}" alt="Multi-Post Stories project" class="image">
      <div class="left-card1-block two">
          <h2 class="project-title desktop">${desktopCardData.cardTitle[1]}</h2>
        <ul class="project-badges">
          <li class="text-1 mobile2">Canopy</li>
          <li class="text-1 desktop-facebook">FACEBOOK</li>
          <img src="${desktopCardData.counterImg}" alt="" class="counter-image">
          <li class="text-2 mobilebackend">
            <p>${desktopCardData.badges1[1]}</p>
          </li>
          <li class="text-2 desktopfullstack">
          ${desktopCardData.badges2[1]}
          </li>
          <img src="${desktopCardData.counterImg}" alt="" class="counter-image">
          <li class="text-3">${desktopCardData.badges1[2]}</li>
        </ul>

        <p class="project-description mobile2">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
        </p>
        <p class="project-description desktop2 text">
          Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.
        </p>

        <ul class="language-categories">
            <li>${desktopCardData.languages[0]}</li>
            <li id="rubby-desktop-1">${desktopCardData.languages[3]}</li>
            <li>${desktopCardData.languages[1]}</li>
            <li>${desktopCardData.languages[2]}</li>
        </ul>
        <button class="submit-btn modal-btn"  type="submit">See Project</button>
      </div>

      <img src="${desktopCardData.desktopIimages[1]}" alt="multi-post stories project" class="desktop-image2">
    </div>
`;

const cardThree = document.querySelector('.three');
cardThree.innerHTML += `
<img src="${desktopCardData.mobileImages[1]}" alt="Facebook 360 project" class="image">
<img src="${desktopCardData.desktopIimages[2]}" alt="Facebook 360 project" class="desktop-image3">
<div class="left-card1-block three">
  <h2 class="project-title">${desktopCardData.cardTitle[2]}</h2>

  <ul class="project-badges">
    <li class="text-1 mobile">${desktopCardData.badges1[0]}</li>
    <li class="text-1 desktop">${desktopCardData.badges3[0]}</li>
    <img src="${desktopCardData.counterImg}" alt="" class="counter-image">

    <li class="text-2 mobile">
      ${desktopCardData.badges1[1]}
    </li>

    <li class="text-2 desktop">
    ${desktopCardData.badges2[1]}
    </li>
    <img src="${desktopCardData.counterImg}" alt="" class="counter-image">
    <li class="text-3">${desktopCardData.badges1[2]}</li>
    
  </ul>

  
  <p class="project-description mobile2" >
    A daily selection of privately personalized reads; no accounts or sign-ups required.
  </p>

  <p class="project-description desktop three">
    Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.
  </p>

  <br>
  <ul class="language-categories">
   
  <li>${desktopCardData.languages[0]}</li>
  <li id="rubby-desktop-1">${desktopCardData.languages[3]}</li>
  <li>${desktopCardData.languages[1]}</li>
  <li>${desktopCardData.languages[2]}</li>
  </ul>
    
    <div> 
      <button class="submit-btn mobile modal-btn" type="submit" >See Project</button>
      <button class="submit-btn desktop modal-btn" type="submit" >See Project</button>
      <div class="handcursor"><img src="./images/hand-cursor1.svg" alt="cursor hover"></div>
    </div>
</div>

`;

const cardFour = document.querySelector('.four');

cardFour.innerHTML += `
    <img src="${desktopCardData.mobileImages[2]}" alt="uber navigation project" class="image">
      <div class="left-card1-block four">
        <h2 class="project-title desktop">${desktopCardData.cardTitle[3]}</h2>
        
        <ul class="project-badges">
          <li class="text-1 dektop">${desktopCardData.badges1[0]}</li>
          <li class="text-1 desktop">Uber</li>
          <img src="${desktopCardData.counterImg}" alt="" class="counter-image">
          <li class="text-2 mobile">
            ${desktopCardData.badges1[1]}
          </li>
          <li class="text-2 desktop">
            <p>${desktopCardData.badges4[1]}</p>
          </li>

          <img src=".${desktopCardData.counterImg}" alt="" class="counter-image">
          <li class="text-3 year">${desktopCardData.badges1[2]}</li>
          <li class="text-3 years">${desktopCardData.badges4[2]}</li>

        </ul>

        <p class="project-description mobile">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
        </p>

        <p class="project-description four">
          A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.
        </p>
        <br>
        <ul class="language-categories">
          <li>${desktopCardData.languages[0]}</li>
          <li id="rubby-desktop-3">${desktopCardData.languages[3]}</li>
          <li>${desktopCardData.languages[1]}</li>
          <li>${desktopCardData.languages[2]}</li>
        </ul>
        
        <button class="submit-btn modal-btn" type="submit">See Project</button>
      </div>
      <img src="${desktopCardData.desktopIimages[3]}" alt="uber navigation project" class="desktop-image4">
    </div>

`;




const modalPopupFunc = () => {
  const modalBg = document.querySelector('.modal-bg');
  const modalClose = document.querySelector('.close');
  modalBg.classList.add('bg-active');
  modalClose.addEventListener('click', () => {
    modalBg.classList.remove('bg-active');
  });
};

const modalsButton = document.querySelectorAll('.modal-btn');
modalsButton.forEach((item) => {
  item.addEventListener('click', () => {
    modalPopupFunc();
  });
});

// local storage section
