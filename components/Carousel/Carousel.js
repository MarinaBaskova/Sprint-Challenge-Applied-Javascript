class Carousel {
    constructor(item){
        this.item = item;
        this.rightBtn = item.querySelector('.right-button');
        this.leftBtn = item.querySelector('.left-button');
        this.images = Array.from(item.querySelectorAll('.img'));
        this.currentIndex = 0;
        //Events on BTN
        this.rightBtn.addEventListener('click', () => this.showNextImg());
        this.leftBtn.addEventListener('click', () => this.showBeforeImg());
    }

    showNextImg() {

    }

    showBeforeImg() {
        
    }

}

class CarouselImage {
    constructor(item){
        
    }
}

let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let crousel = new Carousel (document.querySelector('.carousel'))