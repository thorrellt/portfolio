import {Carousel} from './carousel.js';

// let carousel = new Carousel();
// carousel.startCarousel();

$(document).ready(function () {
    $('.btn').click(function () {
        $('.nav-item').toggleClass("show");
        $('ul li').toggleClass("hide");
    });
});


/***************************
 * URL TYPING WHEN HOVERING
 * OVER CONTACT BUTTON
****************************/

//Variables & Utilities
const urlDisp = document.getElementById('urlDisp');
const contactIcons = document.querySelectorAll('.contact');

let isTyping = false;
let isDeleting = false;
let mouseHoverId = "none";

urlDisp.isEmpty = function() {return urlDisp.style.animationDirection === "reverse";}
urlDisp.isAnimating = function() {return (isDeleting || isTyping);}

const DISPLAY_URLS = {
    gitHub: 'github.com/thorrell<span class="shadow">t</span>',
    linkedIn: 'linkedin.com/in/thorrell<span class="shadow">t</span>',
    email: 'thorrell<span class="shadow">t</span>@gmail.com',
    none: 'thorrell<span class="shadow">t</span>'
};

urlDisp.textStatus = function() {
    if(isTyping) return "TYPING";
    if(isDeleting) return "DELETING";
    if(urlDisp.isEmpty()) return "EMPTY";
    return "FULL";
}

urlDisp.dispIsCurrent = function () {
    return (DISPLAY_URLS[mouseHoverId] === urlDisp.innerHTML);
}


//Animation & Display Functions
function replaceText() {
    urlDisp.textContent = "";
    urlDisp.insertAdjacentHTML("beforeend", DISPLAY_URLS[mouseHoverId]);
    return true;
}

function restartAnimation(){
    urlDisp.classList.remove("typed");
    void urlDisp.offsetWidth;
    urlDisp.classList.add("typed");

}

function typeDisplay (speed = "1s") {
    urlDisp.style.animationDirection = "normal";
    urlDisp.style.animationDuration = speed;
    restartAnimation();
    isTyping = true;
}

function deleteDisplay(speed = "0.6s") {    
    urlDisp.style.animationDirection = "reverse";
    urlDisp.style.animationDuration = speed;
    restartAnimation();
    isDeleting = true;
}


//urlDisp listener for animation ending
urlDisp.addEventListener('animationend', function(){
    isTyping = false;
    isDeleting = false;


    if(urlDisp.textStatus() === "FULL"){
        if (urlDisp.dispIsCurrent() || mouseHoverId === null) {
            return true;
        }
        console.log("event heard full and called delete");
        deleteDisplay(".3s");
    }

    if(urlDisp.textStatus() === "EMPTY") {
        console.log("event heard empty and called typing");
        replaceText();
        typeDisplay();
    }
}
);

//this handles hover behaviors ONLY when 
//animation is not currently executing 
function hoverChange() {
    //filter out if animation running
    if (urlDisp.isAnimating()){
        return false;
    } 

    //animate the deletion of incorrect contect
    if(urlDisp.textStatus() === "FULL"){
        //filter out if URL content already current
        if (urlDisp.dispIsCurrent()) {
            return true;
        }
        deleteDisplay();
        return false;
    }

    //animate the typing of the correct contect
    if(urlDisp.textStatus() === "EMPTY"){
        typeDisplay();
        return false;
    }
} 

//contact-btn Hover listener
contactIcons.forEach( key => key.addEventListener('mouseover', function(){
    mouseHoverId = this["id"];
    hoverChange();
}));


//contact-btn Hover-out listener
contactIcons.forEach( key => key.addEventListener('mouseout', function(){
    mouseHoverId = "none";
    hoverChange();
}));


