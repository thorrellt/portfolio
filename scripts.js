let isTyping = false;
let isDeleting = false;
let mouseHoverId = null;



$(document).ready(function () {
    $('.btn').click(function () {
        $('.nav-item').toggleClass("show");
        $('ul li').toggleClass("hide");
    });
});



let gh = document.getElementById('gitHub');
let urlDisp = document.getElementById('urlDisp');

urlDisp.isEmpty = function() {
    console.log("animation direction:: " + urlDisp.style.animationDirection);
    return urlDisp.style.animationDirection === "reverse";
}

urlDisp.addEventListener('animationend', function(){
    isTyping = false;
    isDeleting = false;
}
);

urlDisp.textStatus = function() {
    if(isTyping) return "TYPING";
    if(isDeleting) return "DELETING";
    if(urlDisp.isEmpty()) return "EMPTY";
    return "FULL";
}

urlDisp.dispCurrent = function () {
    return (DISPLAY_URLS[mouseHoverId] === urlDisp.innerHTML);
}

const contactIcons = document.querySelectorAll('.contact');


const DISPLAY_URLS = {
    gitHub: 'github.com/thorrell<span class="shadow">t</span>',
    linkedIn: 'linkedin.com/in/thorrell<span class="shadow">t</span>',
    email: 'thorrell<span class="shadow">t</span>@gmail.com'
};

function replaceText() {

    if (DISPLAY_URLS[mouseHoverId]){
    urlDisp.textContent = "";
    urlDisp.insertAdjacentHTML("beforeend", DISPLAY_URLS[mouseHoverId]);
    return true;
    }

    urlDisp.textContent = "";
    urlDisp.insertAdjacentHTML("beforeend", `thorrell<span class="shadow">t</span>`);



}

function restartAnimation(){
    urlDisp.classList.remove("typed");
    void urlDisp.offsetWidth;
    urlDisp.classList.add("typed");

}

function typeDisplay (speed = "2s") {
    console.log("animation stated");
    urlDisp.style.animationDirection = "normal";
    urlDisp.style.animationDuration = speed;

    replaceText();
    restartAnimation();
    isTyping = true;
}

function deleteDisplay(speed = "1s") {    
    urlDisp.style.animationDirection = "reverse";
    urlDisp.style.animationDuration = speed;
    
    
    restartAnimation();
    isDeleting = true;

    replaceText();
}


//urlDisp listener for animation ending
urlDisp.addEventListener('animationend', function(){
    console.log("animation ended");
    isTyping = false;
    isDeleting = false;
    console.log("urDisp Status:: " + urlDisp.textStatus());
    console.log("urDisp dispCurrent::  " + urlDisp.dispCurrent());


    if(urlDisp.textStatus() === "FULL"){
        if (urlDisp.dispCurrent() || mouseHoverId === null) {
            return true;
        }
        console.log("event heard full and called delete");
        deleteDisplay(".3s");
    }

    if(urlDisp.textStatus() === "EMPTY") {
        console.log("event heard empty and called typing");
        typeDisplay("2s");
    }
}
);

//contact-btn Hover listener
contactIcons.forEach( key => key.addEventListener('mouseover', function(){
    mouseHoverId = this["id"];


    console.log("textStatus on Hover:: " + urlDisp.textStatus());
    console.log("display current on hover:: " + urlDisp.dispCurrent());

    //display is current and either typing, or complete
    if (urlDisp.dispCurrent() && urlDisp.textStatus() !== "DELETING") {
        return true;
    }

    //display is full but wrong content
    if(urlDisp.textStatus() === "FULL"){
        deleteDisplay(".3s");
        return false;
    }

    //display is empty. 
    if(urlDisp.textStatus() === "EMPTY"){
        typeDisplay();
        return false;
    }

    console.log(urlDisp.innerHTML);
    console.log(DISPLAY_URLS[this["id"]]);
}));


//contact-btn Hover-out listener
contactIcons.forEach( key => key.addEventListener('mouseout', function(){
    mouseHoverId = null;

    console.log(DISPLAY_URLS[this["id"]]);

    deleteDisplay();

}));



