// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require bootstrap/modal
//= require_tree .
//= require jquery.ui.touch-punch


$(document).on('turbolinks:load', function(){
  $('#mainCarousel').carousel();
  $("#budget-slider").slider({
    range:"min",
    min: 0 ,
    max: 30,
    values: 0,
    slide: function( event, ui ) {
      $('.budget-hidden-field').val(ui.value*1000);
      $("#budget-number").html("US$ " + ui.value*1000);
    }
  });
  $('.contact-nav-item').on('click',function(){
    showContactForm()
  });
  $('#get-in-touch').on('click',function(){
    showContactForm()
  });
  $('#get-quote-button').on('click',function(){
    showContactForm()
  });
  $('.closebtn').on('click',function(){
    $('.contact-modal').animate({
      top: "-100%"
    }, 1000, function(){
      $('.contact-modal').hide();
    });
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  });

  function showContactForm(){
    $('.contact-modal').show();
    $('.contact-modal').animate({
      top: "0"
    }, 1000);
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
  };
  $('.close-btn').on('click',function(){
    $(".small-screen-menu").width(0);
    $(".page-content").css('margin-left','0px');
  });

  $('.menu-dropdown-button').on('click', function(){
    $(".small-screen-menu").width(150);
    $(".page-content").css('margin-left','150px');
  });
  $(window).resize(function(){
    $(".small-screen-menu").width(0);
    $(".page-content").css('margin-left','0px');
  });
  // still need to write function to reassign contact button on resize
});
