//Burger menu

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navigation-list');
    const navLinks = document.querySelectorAll('.navigation-list li');

   
    burger.addEventListener('click', ()=> {
         //Toggle Nav
        nav.classList.toggle('nav-active');
    

    //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

//Event handler for powerful property

const paragraphPowerful = document.querySelector('#powerful');
const powerfulMoreInfo = document.querySelector('.powerful-more-info');

const displayMoreInfoPowerful = () => {
    powerfulMoreInfo.classList.toggle('display-paragraph');
}

paragraphPowerful.addEventListener('click', displayMoreInfoPowerful);


//Event handler for majestic property
const paragraphMajestic = document.querySelector('#majestic');
const majesticMoreInfo = document.querySelector('.majestic-more-info');

const displayMoreInfoMajestic = () => {
    majesticMoreInfo.classList.toggle('display-paragraph');
}

paragraphMajestic.addEventListener('click', displayMoreInfoMajestic);

//Event handler for stern property
const paragraphStern = document.querySelector('#stern');
const sternMoreInfo = document.querySelector('.stern-more-info');

const displayMoreInfoStern = () => {
    sternMoreInfo.classList.toggle('display-paragraph');
}

paragraphStern.addEventListener('click', displayMoreInfoStern);

//Event handler for secluded property
const paragraphSecluded = document.querySelector('#secluded');
const secludedMoreInfo = document.querySelector('.secluded-more-info');

const displayMoreInfoSecluded = () => {
    secludedMoreInfo.classList.toggle('display-paragraph');
}

paragraphSecluded.addEventListener('click', displayMoreInfoSecluded);

//Event handler for house-one
const houseOne = document.querySelector('#house-one');
const houseOneMoreInfo = document.querySelector('.house-one-more-info');

const displayMoreInfoHouseOne = () => {
    houseOneMoreInfo.classList.toggle('display-paragraph-house');
}

houseOne.addEventListener('click', displayMoreInfoHouseOne);

//Event handler for house-two
const houseTwo = document.querySelector('#house-two');
const houseTwoMoreInfo = document.querySelector('.house-two-more-info');

const displayMoreInfoHouseTwo = () => {
    houseTwoMoreInfo.classList.toggle('display-paragraph-house');
}

houseTwo.addEventListener('click', displayMoreInfoHouseTwo);

//Event handler for house-three
const houseThree = document.querySelector('#house-three');
const houseThreeMoreInfo = document.querySelector('.house-three-more-info');

const displayMoreInfoHouseThree = () => {
    houseThreeMoreInfo.classList.toggle('display-paragraph-house');
}

houseThree.addEventListener('click', displayMoreInfoHouseThree);