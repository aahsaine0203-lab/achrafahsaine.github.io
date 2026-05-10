import $ from 'jquery';

export const initAnimations = () => {
  $(document).ready(function() {
    // 1. Smooth Scrolling for Anchor Links
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 50
        }, 800);
      }
    });

    // 2. Animate Skill Bars on Scroll
    var animated = false;
    $(window).on('scroll', function() {
      var skillsSection = $('#skills');
      if (skillsSection.length === 0) return;
      
      var offsetTop = skillsSection.offset().top;
      var windowHeight = $(window).height();
      
      if (!animated && $(window).scrollTop() > offsetTop - windowHeight + 200) {
        $('.progress').each(function() {
          var width = $(this).data('level');
          $(this).css('width', width);
        });
        animated = true; // prevent re-animating
      }
    });

    // 3. Education Timeline Accordion Effect
    $('.accordion-icon').off('click').on('click', function(e) {
      e.stopPropagation();
      var content = $(this).closest('.timeline-content');
      var desc = content.find('.timeline-desc');
      var icon = $(this);
      
      desc.slideToggle(300);
      
      if (icon.hasClass('fa-chevron-down')) {
        icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      } else {
        icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
      }
    });
  });
};
