// Пример: Анимация при прокрутке (fade-in)
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Останавливаем наблюдение после появления
            }
        });
    }, {
        threshold: 0.1 // Анимация запускается, когда элемент виден на 10%
    });

    fadeElements.forEach(el => {
        el.classList.add('fade-in'); // Добавляем класс для начального состояния
        observer.observe(el);
    });

    // Пример: плавный скролл к якорям
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
});