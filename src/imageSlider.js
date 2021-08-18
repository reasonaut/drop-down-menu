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
        // create divs for images
        for (let i = 1; i < 6; i += 1) {
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('image-container');
            imageDiv.setAttribute('data-id', i);
            imageSliderContainer.appendChild(imageDiv);
            const image = new Image();
            image.src = images[i - 1];
            imageDiv.appendChild(image);
        }
        contentContainer.appendChild(imageSliderContainer);
    }

    return { buildHtml };
})();
export default { ImageSlider };
