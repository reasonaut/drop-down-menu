import Image1 from './assets/image-1.jpg';
import Image2 from './assets/image-2.jpg';
import Image3 from './assets/image-3.jpg';
import Image4 from './assets/image-4.jpg';
import Image5 from './assets/image-5.jpg';

export const ImageSlider = (() => {
    const images = [Image1, Image2, Image3, Image4, Image5];
    const contentContainer = document.getElementById('content');
    function buildHtml() {
        const imageSliderContainer = document.createElement('div');
        imageSliderContainer.id = 'image-slider-container';
        
        // create prev button
        const leftButton = document.createElement('button');
        leftButton.id = 'left-button';
        leftButton.innerText = 'prev';
        imageSliderContainer.appendChild(leftButton);
        // create images track
        const trackContainer = document.createElement('div');
        trackContainer.id = 'track-container';
        const imagesTrack = document.createElement('ul');
        imagesTrack.id = 'images-track';
        for (let i = 1; i < 6; i += 1) {
            const imageListItem = document.createElement('li');
            imageListItem.classList.add('image-slide');
            imageListItem.setAttribute('li-id', i);
            imagesTrack.appendChild(imageListItem);
            const image = new Image();
            image.src = images[i - 1];
            imageListItem.appendChild(image);
        }
        trackContainer.appendChild(imagesTrack);
        imageSliderContainer.appendChild(trackContainer);
        // create next button
        const rightButton = document.createElement('button');
        rightButton.id = 'right-button';
        rightButton.innerText = 'next';
        imageSliderContainer.appendChild(rightButton);
        // create slider nav buttons
        const sliderNav = document.createElement('div');
        sliderNav.id = 'slider-nav';
        for (let i = 0; i < images.length; i += 1) {
            const navButton = document.createElement('button');
            navButton.classList.add('nav-button');
            navButton.setAttribute('nav-button-id', i + 1);
            sliderNav.appendChild(navButton);
        }
        imageSliderContainer.appendChild(sliderNav);

        contentContainer.appendChild(imageSliderContainer);
    }

    return { buildHtml };
})();
export default { ImageSlider };
