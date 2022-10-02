const track = document.querySelector('.workplease');
const slides =  Array.from(track.children);
const nextButton = document.querySelector('.rightarrow--right');
const prevButton = document.querySelector('.leftarrow--left');
const dotsNav = document.querySelector('.navigateimages');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;


const  setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'; 
}; 

slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'; 
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

//click left, move left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;


    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
     
});


//click right, move right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});









