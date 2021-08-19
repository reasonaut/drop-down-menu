import Image1 from './assets/image-1.jpg';
import Image2 from './assets/image-2.jpg';
import Image3 from './assets/image-3.jpg';
import Image4 from './assets/image-4.jpg';
import Image5 from './assets/image-5.jpg';

export const ImageSlider = (() => {
    const images = [Image1, Image2, Image3, Image4, Image5];
    const contentContainer = document.getElementById('content');
    function moveToSlide(slider, currentSlide, targetSlide) {
        slider.style.transform = `translateX(-${targetSlide.style.left})`;
        const currentSlideId = currentSlide.getAttribute('li-id');
        const currentNav = document.querySelector(
            `[nav-button-id='${currentSlideId}']`
        );
        const targetSlideId = targetSlide.getAttribute('li-id');
        const targetNav = document.querySelector(
            `[nav-button-id='${targetSlideId}']`
        )
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
        currentNav.classList.remove('current-slide');
        targetNav.classList.add('current-slide');
    }

    function moveSliderLeft() {
        const slider = document.querySelector('#images-track');
        const currentSlide = document.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        if (!nextSlide) return;
        moveToSlide(slider, currentSlide, nextSlide);
    }

    function moveSliderRight() {
        const slider = document.querySelector('#images-track');
        const currentSlide = document.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        if (!prevSlide) return;
        moveToSlide(slider, currentSlide, prevSlide);
    }

    function navBarSelection(e) {
        const navButtonId = e.target.getAttribute('nav-button-id');
        const navigatedSlide = document.querySelector(
            `[li-id='${navButtonId}']`
        );
        const slider = document.querySelector('#images-track');
        const currentSlide = document.querySelector('.current-slide');
        moveToSlide(slider, currentSlide, navigatedSlide);
    }

    function buildHtml() {
        const imageSliderContainer = document.createElement('div');
        imageSliderContainer.id = 'image-slider-container';

        // create prev button
        const leftButton = document.createElement('button');
        leftButton.id = 'left-button';
        leftButton.innerText = 'prev';
        leftButton.addEventListener('click', moveSliderRight);
        imageSliderContainer.appendChild(leftButton);
        // create images track
        const trackContainer = document.createElement('div');
        trackContainer.id = 'track-container';
        const imagesTrack = document.createElement('ul');
        imagesTrack.id = 'images-track';
        for (let i = 0; i < images.length; i += 1) {
            const imageListItem = document.createElement('li');
            imageListItem.classList.add('image-slide');
            imageListItem.setAttribute('li-id', i + 1);
            imagesTrack.appendChild(imageListItem);
            const image = new Image();
            image.src = images[i];
            imageListItem.appendChild(image);
        }
        // set initial page load slide
        imagesTrack.firstElementChild.classList.add('current-slide');
        trackContainer.appendChild(imagesTrack);
        imageSliderContainer.appendChild(trackContainer);
        // create next button
        const rightButton = document.createElement('button');
        rightButton.id = 'right-button';
        rightButton.innerText = 'next';
        rightButton.addEventListener('click', moveSliderLeft);
        imageSliderContainer.appendChild(rightButton);
        // create slider nav buttons
        const sliderNav = document.createElement('div');
        sliderNav.id = 'slider-nav';
        for (let i = 0; i < images.length; i += 1) {
            const navButton = document.createElement('button');
            navButton.classList.add('nav-button');
            navButton.setAttribute('nav-button-id', i + 1);
            navButton.addEventListener('click', navBarSelection);
            sliderNav.appendChild(navButton);
        }
        // set initial page load nav selection
        sliderNav.firstElementChild.classList.add('current-slide');
        imageSliderContainer.appendChild(sliderNav);

        contentContainer.appendChild(imageSliderContainer);
    }

    function arrangeImagesHorizontally() {
        const slideWidth = document
            .querySelector('.image-slide')
            .getBoundingClientRect().width;
        const imagesTrack = document.querySelector('#images-track');
        for (let i = 0; i < imagesTrack.childElementCount; i += 1) {
            const slide = document.querySelector(`[li-id='${i + 1}']`);
            slide.style.left = `${i * slideWidth}px`;
        }
    }

    return { buildHtml, arrangeImagesHorizontally };
})();
export default { ImageSlider };
