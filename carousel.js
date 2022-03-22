export class Carousel {
    #carouselImages = document.querySelectorAll('.slide');
    #imageCount = this.#carouselImages.length;
    #slideCount = 0;
    #slidespeed = 2 * 1000;
    #animationSpeed = '0.2s';
    #opacityTransitionSpeed = 200;
    #activeSlide = document.querySelector('.slide[data-active]');

    constructor() {
        console.log("#carouselImages:: " + this.#carouselImages);
        console.log("#imageCount:: " + this.#imageCount );
        console.log("#slideCount:: " + this.#slideCount); 
        console.log("#slidespeed:: " + this.#slidespeed );
        console.log("#animationSpeed:: " + this.#animationSpeed );
        console.log("#activeSlide :: " + this.#activeSlide  );
        // this.#carouselImages[this.#slideCount].classList.add()

    }

    
    #setImageOpacity(newOpacity){
        console.log("opacity");
        this.#activeSlide.style.opacity = newOpacity;
    }

    #nextImage(){
        delete this.#activeSlide.dataset.active;
        this.#slideCount = ++this.#slideCount % this.#imageCount;
        this.#carouselImages[this.#slideCount].dataset.active = true;
        this.#activeSlide = document.querySelector('.slide[data-active]');
    }
    
    test(){
        console.log("this is  a test");
    }

    #cycleImage(){
        this.test();
        this.#carouselImages[this.#slideCount].classList.remove('visible');
        setTimeout(() => { this.#nextImage(); }, this.#opacityTransitionSpeed);
        setTimeout(() => { this.#carouselImages[this.#slideCount].classList.add('visible');}, this.#opacityTransitionSpeed+1);
        // this.#carouselImages[this.#slideCount].classList.add('visible');
    }


    startCarousel()  {
        // setInterval(this.#cycleImage(), this.#slidespeed);
        setInterval(() => { this.#cycleImage(); }, this.#slidespeed);
    }
}
