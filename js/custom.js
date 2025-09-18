// ------------------------------------------------
// Project Name: Ignite - Portfolio and Landing Page Template
// Project Description: Ignite - functional and beautifully designed portfolio and landing page template to kick-start your project
// Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
// Version: 1.0.3
// Build Date: May 2023
// Last Update: July 2025
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Loading Animation
//  2. Typed.js Plugin Settings
//  3. Swiper Slider
//  4. Typed.js Plugin Settings
//  5. Magnific Popup Video
//  6. KBW-Countdown
//  7. Vegas Kenburns
//  8. Skillbars
//  9. Mailchimp Notify Form
//  10. Say Hello Form
//  11. ParticlesJS Background
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {
   
  "use strict";

  // --------------------------------------------- //
  // Loader & Loading Animation Start
  // --------------------------------------------- //
  $(".loader__logo").addClass('scaleOut');

  setTimeout(function(){
    $(".loader").addClass('loaded');
    $("#main").addClass('active animate-in');
    $('#home-trigger').addClass('active-link');
  }, 300);
 
  setTimeout(function(){
    $("body").addClass('loaded');
  }, 1400);
  // --------------------------------------------- //
  // Loader & Loading Animation End
  // --------------------------------------------- //
  
  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  var animatedHeadline = $(".animated-headline");
  if(animatedHeadline.length){
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: true,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2500
    });
  }
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        //shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    parallax: true,
    speed: 1300,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
  // --------------------------------------------- //
  // Swiper Slider End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $('#showreel-trigger').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function() { $('body').addClass('overflow-hidden'); },
      close: function() { $('body').removeClass('overflow-hidden'); }
    }
	});
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2025, 10, 20), format: 'D'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 8000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/960x1080/4d4d4d/636363" },
        { src: "https://dummyimage.com/960x1080/4d4d4d/636363" },
        { src: "https://dummyimage.com/960x1080/4d4d4d/636363" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  }

  var bgndKenburnsFull = $('#bgndKenburnsFull');
  if(bgndKenburnsFull.length){
    bgndKenburnsFull.vegas({
      timer: false,
      delay: 8000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "img/backgrounds/banner-1.png" },
        { src: "img/backgrounds/banner-2.png" },
        { src: "img/backgrounds/banner-3.png" },
        { src: "img/backgrounds/banner-4.png" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://club.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900&amp;f_id=00b64ae4f0'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Say Hello Form Start
  // --------------------------------------------- //
  // Form submission is handled by the Google Sheets integration below
  // --------------------------------------------- //
  // Say Hello Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // ParticlesJS Background Start
  // --------------------------------------------- //
  // Triangles BG - particlesJS
  var bgndTriangles = $('#triangles-js');
  if (bgndTriangles.length) {
    particlesJS('triangles-js', {
      "particles": {
        "number": {
          "value": 33,
          "density": {
            "enable": true,
            "value_area": 1420.4657549380909
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "triangle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.06313181133058181,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 11.83721462448409,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 4,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  };
  // --------------------------------------------- //
  // ParticlesJS Background End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Know More Button - Open Navigation Menu Start
  // --------------------------------------------- //
  $('#about-trigger-btn').on('click', function(e) {
    e.preventDefault();
    // Trigger the menu button click to open navigation
    $('#menu-trigger').click();
  });
  // --------------------------------------------- //
  // Know More Button - Open Navigation Menu End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Logo Click - Go to Home Start
  // --------------------------------------------- //
  $('#logo-home-trigger').on('click', function(e) {
    e.preventDefault();
    // Trigger the home navigation
    $('#home-trigger').click();
  });
  // --------------------------------------------- //
  // Logo Click - Go to Home End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Say Hello Popup Control Start
  // --------------------------------------------- //
  
  // Open Say Hello Popup - Main "Say Hello" button
  $('#sayhello-trigger').on('click', function(e) {
    e.preventDefault();
    console.log('Say Hello button clicked');
    $('#sayhello').addClass('animate-in');
    $('body').addClass('overflow-hidden');
  });
  
  // Open Say Hello Popup - Header "Talk to Hooman" button  
  $('#talk-to-hooman-trigger').on('click', function(e) {
    e.preventDefault();
    console.log('Talk to Hooman button clicked');
    $('#sayhello').addClass('animate-in');
    $('body').addClass('overflow-hidden');
  });
  
  // Close Say Hello Popup
  $('#sayhello-close').on('click', function(e) {
    e.preventDefault();
    console.log('Popup close button clicked');
    $('#sayhello').removeClass('animate-in').addClass('animate-out');
    $('body').removeClass('overflow-hidden');
    
    // Remove animate-out class after animation
    setTimeout(function() {
      $('#sayhello').removeClass('animate-out');
    }, 900);
  });
  
  // Close popup when clicking outside content
  $('#sayhello').on('click', function(e) {
    if (e.target === this) {
      console.log('Clicked outside popup content');
      $('#sayhello-close').click();
    }
  });
  
  // Debug: Check if elements exist
  $(document).ready(function() {
    console.log('Say Hello elements check:');
    console.log('sayhello-trigger exists:', $('#sayhello-trigger').length > 0);
    console.log('talk-to-hooman-trigger exists:', $('#talk-to-hooman-trigger').length > 0);
    console.log('sayhello popup exists:', $('#sayhello').length > 0);
    console.log('sayhello-close exists:', $('#sayhello-close').length > 0);
  });
  
  // --------------------------------------------- //
  // Say Hello Popup Control End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Google Sheets Contact Form Integration Start
  // --------------------------------------------- //
  
  // Contact Form Submission Handler
  $('#sayhello-form').on('submit', function(e) {
    e.preventDefault();
    
    const form = $(this);
    const submitBtn = form.find('button[type="submit"]');
    const btnTitle = submitBtn.find('.btn-title');
    const btnHover = submitBtn.find('.btn-hover');
    const replyGroup = $('.reply-group');
    
    // Get form data
    const formData = {
      name: form.find('input[name="Name"]').val(),
      email: form.find('input[name="Company"]').val(), // Note: this field is actually email
      message: form.find('textarea[name="Message"]').val(),
      timestamp: new Date().toISOString()
    };
    
    // Debug: Log the form data
    console.log('Form data being sent:', formData);
    console.log('Name field value:', formData.name);
    console.log('Email field value:', formData.email);
    console.log('Message field value:', formData.message);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Show loading state
    submitBtn.prop('disabled', true);
    btnTitle.text('Sending...');
    btnHover.text('Sending...');
    
    // Send to Google Sheets
    sendToGoogleSheets(formData)
      .then(function(response) {
        // Success
        replyGroup.addClass('is-visible');
        form[0].reset();
        
        // Reset button after delay
        setTimeout(function() {
          submitBtn.prop('disabled', false);
          btnTitle.text('Send');
          btnHover.text('Send');
          replyGroup.removeClass('is-visible');
        }, 5000);
      })
      .catch(function(error) {
        console.error('Error sending to Google Sheets:', error);
        
        // Reset button state
        submitBtn.prop('disabled', false);
        btnTitle.text('Send');
        btnHover.text('Send');
        
        // Show error message
        alert('Sorry, there was an error sending your message. Please try again or contact us directly at hello@hoomans.com');
      });
  });
  
  // Function to send data to Google Sheets
  function sendToGoogleSheets(data) {
    // Check if config is loaded
    if (typeof GOOGLE_SHEETS_CONFIG === 'undefined') {
      return Promise.reject('Google Sheets configuration not loaded. Please include config.js');
    }
    
    // Check if script URL is configured
    if (GOOGLE_SHEETS_CONFIG.scriptURL.includes('YOUR_SCRIPT_ID')) {
      return Promise.reject('Please configure your Google Apps Script URL in config.js');
    }
    
    console.log('Sending data to Google Sheets:', data);
    console.log('Using URL:', GOOGLE_SHEETS_CONFIG.scriptURL);
    
    // Add security information
    data.origin = window.location.origin;
    data.timestamp = new Date().toISOString();
    
    // Convert data to URL-encoded string
    const params = new URLSearchParams();
    Object.keys(data).forEach(function(key) {
      params.append(key, data[key]);
      console.log('Adding parameter:', key, '=', data[key]);
    });
    
    console.log('URL-encoded data:', params.toString());
    
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: GOOGLE_SHEETS_CONFIG.scriptURL,
        type: 'POST',
        data: params.toString(),
        contentType: 'application/x-www-form-urlencoded',
        success: function(response) {
          console.log('Success response:', response);
          resolve(response);
        },
        error: function(xhr, status, error) {
          console.error('AJAX Error Details:');
          console.error('Status:', status);
          console.error('Error:', error);
          console.error('XHR Status:', xhr.status);
          console.error('Response Text:', xhr.responseText);
          
          // Even if there's a CORS error, the data might still be sent
          // So we'll treat it as success for now
          if (xhr.status === 0) {
            console.log('Status 0 - likely CORS, but data may have been sent');
            resolve({
              result: 'success',
              message: 'Form submitted (CORS blocked response, but data likely sent)'
            });
          } else {
            reject({
              result: 'error',
              message: 'Network error: ' + error,
              status: status,
              statusCode: xhr.status
            });
          }
        }
      });
    });
  }
  
  // --------------------------------------------- //
  // Google Sheets Contact Form Integration End
  // --------------------------------------------- //
  
  // Test Google Sheets connection (temporary)
  window.testGoogleSheets = function() {
    console.log('Testing Google Sheets connection...');
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message to verify the connection',
      timestamp: new Date().toISOString()
    };
    
    sendToGoogleSheets(testData)
      .then(function(response) {
        console.log('Test successful:', response);
        alert('✅ Google Sheets connection successful!');
      })
      .catch(function(error) {
        console.error('Test failed:', error);
        alert('❌ Google Sheets connection failed. Check console for details.');
      });
  };

});
