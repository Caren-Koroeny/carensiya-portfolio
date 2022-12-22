function modalPopupFunc(){
    const modalBtn = document.querySelector('.modal-btn');
    const modalBg = document.querySelector('.modal-bg');
    const modalClose = document.querySelector('.close');
    modalBg.classList.add('bg-active');
    modalClose.addEventListener('click', () => {
        modalBg.classList.remove('bg-active')
    })
}


const data = {
    title1 : 'Tonic',
    badges: ["Canopy", "images/counter-images.png", "Back End Dev", 'images/counter-images.png', 2015],
    backgroundImage: "images/ModalPopup.svg",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    icons: ['HTML', 'CSS', 'Bootstrap', 'Rubby', 'JavaScript'],
    links: ['See live','images/seelive.png', 'Github', "images/github.png"],
}


const badgesContainer = document.querySelector('.card1-badges')
data.badges.map((item, key) => {
    if (key%2 !== 0){
        badgesContainer.innerHTML += `
        <img src="${item}">
        `
    }else {
        badgesContainer.innerHTML += `
        <li class="badges1">${item}</li>
        `
    }
})

const modallinks = document.querySelector(".links")
data.links.map((item, key) => {
    if(key%2 !== 0){
        modallinks.innerHTML += `<img src="${item}">`
    }else {
        modallinks.innerHTML += `<button class="livebutton">${item}</button>`
    }
});


const header = document.querySelector(".title1tonic")
header.innerHTML += data.title1

const description1 = document.querySelector(".description-text")
description1.innerHTML += 
`<p class="modal-description">${data.description}</p>`

const modalimage1 = document.querySelector(".image1modal")
modalimage1.innerHTML = `
<img src=${data.backgroundImage}>`

const modalIcon = document.querySelector('.modalsIcon')
data.icons.forEach((icontem) => {
    modalIcon.innerHTML += `
    <li class="modal-icons">${icontem}</li>`;
})






