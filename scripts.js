$(document).ready(function () {
    $('.btn').click(function () {
        $('.nav-item').toggleClass("show");
        $('ul li').toggleClass("hide");
    });
});



let gh = document.getElementById('gitHub');
let urlDisp = document.getElementById('urlDisp');

gh.addEventListener('mouseover', function(){
    urlDisp.textContent = "linkedin.com/in/";

    //code to restart animation on hoven
    urlDisp.classList.remove("typed");
    void urlDisp.offsetWidth;
    urlDisp.classList.add("typed");

  });