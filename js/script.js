//sliderMs
$(document).ready(function() {
  $('.mainscreen__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    transform: false,
  });

  $('.lancamento__slider').slick({
    prevArrow: ('.lancamento__prev'),
    nextArrow: ('.lancamento__next'),
    centerMode: true,
    centerPadding: '250px',
    infinite: true,
    slidesToShow: 1,
    responsive: [
    {
      breakpoint: 770,
      settings: {
        centerMode: false,
        centerPadding: '0px 0px',
        rows: 0,
      }
    },
    ]
  });

  $('.jogos__slider').slick({
    prevArrow: ('.jogos__prev'),
    nextArrow: ('.jogos__next'),
    slidesToShow: 1,
  });

  $('.platform__tabs').slick({
    prevArrow: ('.platform__prev'),
    nextArrow: ('.platform__next'),
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 770,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 0,
        }
    },
    {
        breakpoint: 620,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 0,
        }
    },
    {
        breakpoint: 420,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 0,
        }
    }]
  });

  $('.platform__btn'/*класс кнопок фильтра*/).on('click', function(event) {
    let attribute = $(this).data('category'/*категория, по которой будут фильтроваться */);
    $('.platform__tabs').slick('slickUnfilter');
    $('.lancamento__slider').slick('slickUnfilter');
    if (attribute == 'all') {
        return;
    }
    $('.platform__tabs').slick('slickFilter', function() {
      return $('.platform__tabs__card' + '.' + attribute, this).length === 1;
    });
    $('.lancamento__slider').slick('slickFilter', function() {
      return $('.lancamento__slider__item' + '.' + attribute, this).length === 1;
    });
  });
});


//scroll
$('.mainscreen__arrow').click(function() {
  var offset = $('.mainscreen').offset().top + $('.mainscreen').outerHeight(true);
  $('body,html').animate({scrollTop:offset},500, function() {});
});

//filter


//ibg

function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();

//search
let iconSearch=document.querySelector(".search");
let inputSearch=document.querySelector(".input-search");

iconSearch.addEventListener("click", (e) => {
    inputSearch.classList.toggle("clicked");
});



