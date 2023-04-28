jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 30,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots:false,
  loop: true,
  nav: true,
  navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2,
      margin: 15
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});
jQuery(".opinion").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 30,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots:false,
  loop: true,
  nav: true,
  navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2,
      margin: 15
    },

    1024: {
      items: 2
    },

    1366: {
      items: 3
    }
  }
});

jQuery(".upcoming_carousel").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 0,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots:false,
  loop: true,
  nav: true,
  navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 2
    },

    1366: {
      items: 2
    }
  }
});

jQuery(".carousel_reports").owlCarousel({
  autoplay: true,
  rewind: true, /* use rewind if you don't want loop */
  margin: 40,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots:false,
  loop: true,
  nav: true,
  navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1.5,
      margin: 20
    },

    1024: {
      items: 1.5
    },

    1366: {
      items:2.5
    }
  }
});

jQuery(".burget_menu").click(function(){
    jQuery(".wrapper_navigation").addClass('add_menu');
})

jQuery(".crss_buttons").click(function(){
    jQuery(".wrapper_navigation").removeClass('add_menu');
})
jQuery(".close-button_image").click(function(){
    jQuery(".modal-image.open").removeClass('open');
})


// Get Elements
const previewImg = document.querySelectorAll('.image_wrap_gallery img');
const modalImg = document.querySelector('.modal-img img');
const modal = document.querySelector('.modal-image');

previewImg.forEach((images) => {
  images.addEventListener('click', () => {
    modal.classList.add('open');
    let imgSrc = images.src;
    modalImg.src = imgSrc;
  });
});

modal.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
  }
});