'use strict'
$(document).ready(function() {
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    });

    
    $(document).on('click', 'a[href^="#"]', function() {  
   
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        });