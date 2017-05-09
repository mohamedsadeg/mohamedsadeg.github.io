$(" .home").vegas({
   delay: 6000,
   timer: false,
    slides: [{
        src: "img/m-h-3.jpg"
    }, {
        src: "img/m-h-2.jpg"
    },{
        src: "img/m-h-1.jpg"
    }],
    animation: 'random'
});


/*AOS.init({
    duration: 1200,
})*/
(() => {
  'use strict';

  let refOffset = 0;
  const bannerHeight = 94;
  const bannerWrapper = document.querySelector('.banner-wrapper');
  const banner = document.querySelector('.banner');

  function animateOut() {
    bannerWrapper.style.transform = `translateY(-${bannerHeight}px)`;
    bannerWrapper.style.msTransform = `translateY(-${bannerHeight}px)`;
    bannerWrapper.style.webkitTransform = `translateY(-${bannerHeight}px)`;
    bannerWrapper.style.MozTransform = `translateY(-${bannerHeight}px)`;
  }

  function animateIn() {
    bannerWrapper.style.transform = 'translateY(0px)';
    bannerWrapper.style.msTransform = 'translateY(0px)';
    bannerWrapper.style.webkitTransform = 'translateY(0px)';
    bannerWrapper.style.MozTransform = 'translateY(0px)';
  }

  const handler = () => {
    const newOffset = window.scrollY || window.pageYOffset;

    if (newOffset > bannerHeight) {
      if (newOffset > refOffset) {
        animateOut();
      } else {
        animateIn();
      }

      refOffset = newOffset;
    } else {

    }
  };

  window.addEventListener('scroll', handler, false);
})();

jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');

        e.preventDefault();
    });
});
