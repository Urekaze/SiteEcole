/*const rotateBtn = document.querySelector('.rotate-btn');*/
const slides = document.querySelectorAll('.bg-slide');
const totalSlides = slides.length;
let index = 0;

/*rotateBtn.addEventListener('click', () => {
    rotateBtn.classList.add('active');
    setTimeout(() => {
        rotateBtn.classList.remove('active');
    }, 2100)
    slides.forEach(slide => {
        if (slide.classList.contains('active')) {
            slide.classList.add('after-active');
        }
        else {
            slide.classList.remove('after-active');
        }
    })

    slides[index].classList.remove('active');

    index++;

    if (index == totalSlides) {
        index = 0;
    }

    slides[index].classList.add('active');
})*/

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    
    const currentSlide = document.querySelector('.bg-slide.active');
    
    const currentIndex = Array.from(slides).indexOf(currentSlide);
    
    currentSlide.classList.remove('active');
    
    const nextIndex = (currentIndex + 1) % slides.length;
    
    slides[nextIndex].classList.add('active');
}

const interval = setInterval(nextSlide, 10000); // Changement toutes les 10 secondes (15000 ms)

function stopCarousel() {
    clearInterval(interval);
}