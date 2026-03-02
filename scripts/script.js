$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        dots:true,
        nav:true,
        responsive:{
            0:{ items:1 },
            600:{ items:1 },
            1000:{ items:1 }
        }
    });

    
    if ($(window).width() <= 768) {
        $('.owl-carousel').trigger('play.owl.autoplay',[3000]);
    }


$('.material-list div').click(function(){
    $('.material-list div').removeClass('active-material');
    $(this).addClass('active-material');
});



$('.prev-slide, .next-slide').on('click', function(e){
    e.preventDefault();
    var carousel = $(this).closest('.slider-wrapper').find('.owl-carousel');
    if($(this).hasClass('prev-slide')) {
        carousel.trigger('prev.owl.carousel');
    } else {
        carousel.trigger('next.owl.carousel');
    }
});

if ($(window).width() > 768) {
$('.card-item__product').hover(
    function () {$('.hover-desc', this).show();},
    function () {$('.hover-desc', this).hide();}
);
};

$('.card-item__product').hover(
    function () {$('.order-button', this).show();},
    function () {$('.order-button', this).hide();}
);

let currentNumber = 57;
$('.like').on('click', function(){
    if($(this).hasClass('liked')) {
        $(this).removeClass('liked');
        currentNumber = currentNumber-1;
            $('.like-int').text(currentNumber);  
    } else {
       $(this).addClass('liked');
        currentNumber = currentNumber+1;
            $('.like-int').text(currentNumber); 
    }          
});

$('.owl-dots').addClass('no-click');
$('.owl-nav').addClass('no-click');

$('.card-item__product').on('click', function(event) {
        if ($(event.target).closest('.no-click').length === 0) {
            window.open('/card', '_blank'); 
        }
    });


});

// Clone
    const originalDiv = document.getElementById('cardsContainer');
    const clonedDiv = originalDiv.cloneNode(true);
    
    const numberOfClones = 5;
    
    for(let i = 0; i < numberOfClones; i++) {        
        const clone = originalDiv.cloneNode(true);   
        originalDiv.after(clone);
    }
