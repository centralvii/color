import './Slider.css';

export default function Slider(images) {
    let currentSlide = 0;

    const sliderSection = document.createElement('div');
    sliderSection.className = 'slider';

    const slidesContainer = document.createElement('div');
    slidesContainer.className = 'slides';
    sliderSection.appendChild(slidesContainer);

    images.forEach((imageSrc, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) slide.classList.add('active');
        slide.style.backgroundImage = `url(${imageSrc})`;
        slidesContainer.appendChild(slide);
    });

    const prevButton = document.createElement('button');
    prevButton.className = 'prev';
    prevButton.textContent = '❮';
    prevButton.onclick = () => changeSlide(-1);

    const nextButton = document.createElement('button');
    nextButton.className = 'next';
    nextButton.textContent = '❯';
    nextButton.onclick = () => changeSlide(1);

    sliderSection.appendChild(prevButton);
    sliderSection.appendChild(nextButton);

    function changeSlide(direction) {
        const slides = document.querySelectorAll('.slide');
        slides[currentSlide].classList.remove('active');
        currentSlide =
            (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    return sliderSection;
}
