
//The homepage hero section slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 0,
  grabCursor: true,
  speed: 0,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});

  // This function sets up the click events for custom animations using event delegation for the hero section slider
  function setupClickEvents() {
    // Attach event listener to a common parent or the document
    document.addEventListener('click', function(event) {
      const target = event.target;

      // Check if the click was on the hero-slide-1_right-wrapper
      if (target.closest('.hero-slide-1_right-wrapper')) {
        // Change to slide 2 using Swiper instance
        swiper.slideTo(1); // Change to slide index 1 (second slide)

        // Animate the divs
        document.querySelector('.hero-slide1_left-wrapper-bg').style.transition = 'width 0.6s ease-in';
        document.querySelector('.hero-slide1_left-wrapper-bg').style.width = '0%';

        document.querySelector('.hero-slide2_right-wrapper-bg').style.transition = 'width 0.6s ease-in';
        document.querySelector('.hero-slide2_right-wrapper-bg').style.width = '100%';
      }

      // Check if the click was on the hero-slide-2_left-wrapper
      if (target.closest('.hero-slide-2_left-wrapper')) {
        // Change back to slide 1 using Swiper instance
        swiper.slideTo(0); // Change to slide index 0 (first slide)

        // Animate the divs
        document.querySelector('.hero-slide1_left-wrapper-bg').style.transition = 'width 0.6s ease-in';
        document.querySelector('.hero-slide1_left-wrapper-bg').style.width = '100%';

        document.querySelector('.hero-slide2_right-wrapper-bg').style.transition = 'width 0.6s ease-in';
        document.querySelector('.hero-slide2_right-wrapper-bg').style.width = '0%';
      }
    });
  }

  // Call the function to set up click events
  setupClickEvents();


document.querySelector('.swiper-button-next').addEventListener('click', function() {
  console.log('Next button clicked');
});
document.querySelector('.swiper-button-prev').addEventListener('click', function() {
  console.log('Previous button clicked');
});

//intro section slider
const swiper = new Swiper('.swiper-container-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  speed: 0,
  pagination: {
    el: '.swiper-pagination-2',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
  breakpoints: {
    1: {
      slidesPerView: 2,
      spaceBetween: 32
    },
  }
});