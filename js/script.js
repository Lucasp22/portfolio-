$(document).ready(function() {
    lightbox.option({
        'wrapAround': true
      });

      $(window).scroll(function() {
        let position = $(this).scrollTop();
        // console.log(position)

        if(position >= 150) {
            $('.gallery').addClass('change');
        } else {
            $('.gallery').removeClass('change');
        }

      });

      $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
      });

      $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 200) {
          $('.nav-menu').addClass('custom-navbar');
        } else {
          $('.nav-menu').removeClass('custom-navbar');
        }
      });
});
