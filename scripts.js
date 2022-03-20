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

const shadow_t = `<span class="shadow">t</span>`
const DISPLAY_URLS = {
    gitHub: 'github.com/thorrell',
    linkedIn: 'linkedin.com/in/thorrell',
    mail: '@gmail.com'};

function typeText(btnId) {
    if (btnId === "mail") {
        console.log("i read hg");
        urlDisp.textContent = "thorrell";
        urlDisp.insertAdjacentHTML("beforeend", shadow_t);
        urlDisp.insertAdjacentHTML("beforeend", DISPLAY_URLS[btnId]);
        return true;
    }

    urlDisp.textContent = DISPLAY_URLS[btnId];
    urlDisp.insertAdjacentHTML("beforeend", shadow_t);
}

gh.addEventListener('mouseover', function(){

    urlDisp.style.animationDirection = "normal";
    console.log(DISPLAY_URLS[this["id"]]);

    // urlDisp.textContent = "linkedin.com/in/thorrell";
    // urlDisp.insertAdjacentHTML("beforeend", shadow_t);

    typeText(this["id"]);

    //code to restart animation on hover
    urlDisp.classList.remove("typed");
    void urlDisp.offsetWidth;
    urlDisp.classList.add("typed");

});

gh.addEventListener('mouseout', function(){

    urlDisp.style.animationPlayState = "paused";
    urlDisp.style.animationDirection = "reverse";
    urlDisp.style.animationPlayState = "running";

});

function exchangeText() {
    urlDisp.textContent = "linkedin.com/in/";
}
  
