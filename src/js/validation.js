import $ from 'jquery';

export const initValidation = () => {
  $(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
      e.preventDefault(); // Prevent default submission
      
      var isValid = true;
      
      // Get values
      var name = $('#name').val().trim();
      var email = $('#email').val().trim();
      var message = $('#message').val().trim();
      
      // Reset errors
      $('.error-msg').hide();
      $('.form-control').removeClass('error');
      $('#form-success').hide();
      
      // Name validation
      if (name === '') {
        $('#name').addClass('error');
        $('#name-error').fadeIn();
        isValid = false;
      }
      
      // Email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '' || !emailRegex.test(email)) {
        $('#email').addClass('error');
        $('#email-error').fadeIn();
        isValid = false;
      }
      
      // Message validation
      if (message === '') {
        $('#message').addClass('error');
        $('#message-error').fadeIn();
        isValid = false;
      }
      
      // Submit success simulation
      if (isValid) {
        // Here you would normally do an AJAX request to your backend
        
        // Show success message
        $('#form-success').fadeIn();
        
        // Clear form
        $('#contact-form')[0].reset();
        
        // Hide success message after 5 seconds
        setTimeout(function() {
          $('#form-success').fadeOut();
        }, 5000);
      }
    });
    
    // Clear errors on input focus/type
    $('.form-control').on('input focus', function() {
      $(this).removeClass('error');
      $(this).siblings('.error-msg').fadeOut();
    });
  });
};
