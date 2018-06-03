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

$(document).ready(function() {
    $('#about').show();
});

$(document).on('click', 'a[href^="#"]', function() {  
    $('.navContent').hide();
    $($.attr(this, 'href')).fadeIn(500);   
 });

