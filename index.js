//Burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navigation-list');
const navLinks = document.querySelectorAll('.navigation-list li');
 
const navSlide = () => {
   
    burger.addEventListener('click', ()=> {
        //Burger Animation
        burger.classList.toggle('toggle');

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
    });
}

navSlide();

navLinks.forEach(link => link.addEventListener('click', ()=> {
    burger.classList.toggle('toggle');
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
}));

//To show more info about North
class moreInfoParagraph {
    constructor(selector) {
        this.selector = document.querySelector(selector);
    }
    showMoreInfo(toggle = false) {
        if (toggle && this.selector.classList.contains('display-paragraph')) {
            this.selector.classList.remove('display-paragraph');
        } else {
            this.selector.classList.add('display-paragraph');
        }
    }
};

//Event handler for powerful property
const powerful = document.querySelector('#powerful');
const powerMoreInfo = new moreInfoParagraph('.powerful-more-info');
powerful.addEventListener('click', () => powerMoreInfo.showMoreInfo(true));

//Event handler for majestic property
const majestic = document.querySelector('#majestic');
const majesticMoreInfo = new moreInfoParagraph('.majestic-more-info');
majestic.addEventListener('click', () => majesticMoreInfo.showMoreInfo(true));

//Event handler for stern property
const stern = document.querySelector('#stern');
const sternMoreInfo = new moreInfoParagraph('.stern-more-info');
stern.addEventListener('click', () => sternMoreInfo.showMoreInfo(true));

//Event handler for secluded property
const secluded = document.querySelector('#secluded');
const secludedMoreInfo = new moreInfoParagraph('.secluded-more-info');
secluded.addEventListener('click', () => secludedMoreInfo.showMoreInfo(true));

//To show more info about houses
class moreInfoHouse {
    constructor(selector) {
        this.selector = document.querySelector(selector);
    }
    showMoreInfoHouse(toggle = false) {
        if (toggle && this.selector.classList.contains('display-paragraph-house')) {
            this.selector.classList.remove('display-paragraph-house');
        } else {
            this.selector.classList.add('display-paragraph-house');
        }
    }
};

//Event handler for house-one
const houseOne = document.querySelector('#house-one');
const houseOneMoreInfo = new moreInfoHouse('.house-one-more-info');
houseOne.addEventListener('click', () => houseOneMoreInfo.showMoreInfoHouse(true));

//Event handler for house-two
const houseTwo = document.querySelector('#house-two');
const houseTwoMoreInfo = new moreInfoHouse('.house-two-more-info');
houseTwo.addEventListener('click', () => houseTwoMoreInfo.showMoreInfoHouse(true));

//Event handler for house-three
const houseThree = document.querySelector('#house-three');
const houseThreeMoreInfo = new moreInfoHouse('.house-three-more-info');
houseThree.addEventListener('click', () => houseThreeMoreInfo.showMoreInfoHouse(true));