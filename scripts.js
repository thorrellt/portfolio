let isTyping = false;
let isDeleting = false;



$(document).ready(function () {
    $('.btn').click(function () {
        $('.nav-item').toggleClass("show");
        $('ul li').toggleClass("hide");
    });
});



let gh = document.getElementById('gitHub');
let urlDisp = document.getElementById('urlDisp');

const contactIcons = document.querySelectorAll('.contact');



const shadow_t = `<span class="shadow">t</span>`

const DISPLAY_URLS = {
    gitHub: 'github.com/thorrell<span class="shadow">t</span>',
    linkedIn: 'linkedin.com/in/thorrell<span class="shadow">t</span>',
    email: 'thorrell<span class="shadow">t</span>@gmail.com'
};

function typeText(btnId) {
    urlDisp.textContent = "";
    urlDisp.insertAdjacentHTML("beforeend", DISPLAY_URLS[btnId]);
}

//add event listender to every html element of class type 'key'
//if the heard even is a 'transitionend' call our func removeTransition()
contactIcons.forEach( key => key.addEventListener('mouseover', function(){

    urlDisp.style.animationDirection = "normal";
    console.log(DISPLAY_URLS[this["id"]]);

    // urlDisp.textContent = "linkedin.com/in/thorrell";
    // urlDisp.insertAdjacentHTML("beforeend", shadow_t);

    typeText(this["id"]);

    //code to restart animation on hover
    urlDisp.classList.remove("typed");
    void urlDisp.offsetWidth;
    urlDisp.classList.add("typed");

}));


// gh.addEventListener('mouseover', function(){

//     urlDisp.style.animationDirection = "normal";
//     console.log(DISPLAY_URLS[this["id"]]);

//     // urlDisp.textContent = "linkedin.com/in/thorrell";
//     // urlDisp.insertAdjacentHTML("beforeend", shadow_t);

//     typeText(this["id"]);

//     //code to restart animation on hover
//     urlDisp.classList.remove("typed");
//     void urlDisp.offsetWidth;
//     urlDisp.classList.add("typed");

// });

gh.addEventListener('mouseout', function(){

    urlDisp.style.animationPlayState = "paused";
    urlDisp.style.animationDirection = "reverse";
    urlDisp.style.animationPlayState = "running";

});

function exchangeText() {
    urlDisp.textContent = "linkedin.com/in/";
}
  
