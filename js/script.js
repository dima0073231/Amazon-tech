const wrapper = document.getElementById('cardWrapper');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pagination = document.getElementById('paginationDots');
const testimonials = Array.from(wrapper.children);
let currentIndex = 0;
testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(index));
    pagination.appendChild(dot);
});

const updatePagination = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
};

const showSlide = (index) => {
    const cardWidth = wrapper.children[0].offsetWidth + 20; // 20 — gap
    const isMobile = window.innerWidth <= 768;
    const shift = isMobile ? index * 100 : index * cardWidth;

    wrapper.style.transform = isMobile
        ? `translateX(-${shift}%)`
        : `translateX(-${shift}px)`;

    currentIndex = index;
    updatePagination();
};

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showSlide(currentIndex);
};

const prevSlide = () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showSlide(currentIndex);
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


setInterval(nextSlide, 3000);
showSlide(0);