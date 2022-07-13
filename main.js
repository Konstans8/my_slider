const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(const slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(const dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepereCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const nextSlide = () => {
    if(index ==slides.length - 1) {
        index = 0;
        prepereCurrentSlide(index);
    }else{
        index++;
        prepereCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepereCurrentSlide(index);
    }else{
        index--;
        prepereCurrentSlide(index);
    }
}

const timerSlide = () => {
    timer = setInterval(() => {
        nextSlide();
    },5000);
}

timerSlide();

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepereCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

