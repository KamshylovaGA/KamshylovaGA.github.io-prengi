window.addEventListener('DOMContentLoaded', function() {

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
//Slider First

    let slideIndex = 1;
    const slides = document.querySelectorAll('.first_slide'),
        prev = document.querySelector('.first_prev'),
        next = document.querySelector('.first_next'),        
        dots = document.querySelectorAll('.first_dot') ;

    showSlides(slideIndex);    

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';              
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
        dots.forEach(dot => dot.style.background = "none");
        dots[slideIndex-1].style.background = "#fff";        
    });

    next.addEventListener('click', function(){
        plusSlides(1);
        dots.forEach(dot => dot.style.background = "none");
        dots[slideIndex-1].style.background = "#fff";
    });
    
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-first-slide');
            slideIndex = slideTo;
            
            slides.forEach((item) => item.style.display = 'none');
            slides[slideIndex - 1].style.display = 'block';

            dots.forEach(dot => dot.style.background = "none");
            dots[slideIndex-1].style.background = "#fff";
        });
    });

// Slider Three
    let slideIndex3 = 1;
    const slides3 = document.querySelectorAll('.three_slide'),
        prev3 = document.querySelector('.three_prev'),
        next3 = document.querySelector('.three_next'),         
        dots3 = document.querySelectorAll('.three_list') ;

    showSlides3(slideIndex3);    

    function showSlides3(n) {
        if (n > slides3.length) {
            slideIndex3 = 1;
        }
        if (n < 1) {
            slideIndex3 = slides3.length;
        }

        slides3.forEach((item) => item.style.display = 'none');

        slides3[slideIndex3 - 1].style.display = 'block';                
    }

    function plusSlides3 (n) {
        showSlides3(slideIndex3 += n);
    }

    prev3.addEventListener('click', function(){
        plusSlides3(-1);
        dots3.forEach(dot => dot.style.color = "#fff");
        dots3[slideIndex3-1].style.color = "#002ba1";        
    });

    next3.addEventListener('click', function(){
        plusSlides3(1);
        dots3.forEach(dot => dot.style.color = "#fff");
        dots3[slideIndex3-1].style.color = "#002ba1";
    });
    
    dots3.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide');

            slideIndex3 = slideTo;
            
            slides3.forEach((item) => item.style.display = 'none');
            slides3[slideIndex3 - 1].style.display = 'block';

            dots3.forEach(dot => dot.style.color = "#fff");
            dots3[slideIndex3-1].style.color = "#002ba1";
        });
    });
    //MODAL
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.overlay');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 300000);

});


