/**
* Template Name: Company
* Updated: Aug 30 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * garbage isotope and filter
   */
  window.addEventListener('load', () => {
    let garbageContainer = select('.garbage-container');
    if (garbageContainer) {
      let garbageIsotope = new Isotope(garbageContainer, {
        itemSelector: '.garbage-item'
      });

      let garbageFilters = select('#garbage-flters li', true);

      on('click', '#garbage-flters li', function(e) {
        e.preventDefault();
        garbageFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        garbageIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        garbageIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate garbage lightbox 
   */
  const garbageLightbox = GLightbox({
    selector: '.garbage-lightbox'
  });

  /**
   * garbage details slider
   */
  new Swiper('.garbage-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
  /**
   * prediction
   */
  'use strict'
  const demo = document.querySelector('#demo');
  const imageUpload = document.getElementById('imageupload');
  const dataAttributeEL = document.querySelectorAll(`div[data-type]`);
  const displayAll = function () {
      dataAttributeEL.forEach(el => {
          el.classList.remove('hidden')
      })
  }
  
  
  imageUpload.addEventListener('change', (event) => {
      const fileList = event.target.files[0];
  
      //console.log(URL.createObjectURL(fileList));
      if (fileList) {
          demo.src =URL.createObjectURL(fileList);
      }
      displayAll();
  
  });
    
  const prediction = document.querySelector('#result')
  dataAttributeEL.forEach(el => {
      if (el.dataset.type !== prediction.innerHTML.trim()) {
          el.classList.add('hidden')
      };
  })


  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()